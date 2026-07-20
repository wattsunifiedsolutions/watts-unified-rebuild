(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const money = (value) => new Intl.NumberFormat("en-US", {style:"currency",currency:"USD",maximumFractionDigits:0}).format(value);
  const state = {status:"",focus:""};
  const pay=$("pay"), years=$("years"), tsp=$("tsp"), correction=$("correction"), age=$("age"), coverage=$("coverage");

  document.querySelectorAll("[data-choice]").forEach(group => {
    group.addEventListener("click", event => {
      const button=event.target.closest("button[data-value]"); if(!button)return;
      group.querySelectorAll("button").forEach(item=>item.classList.remove("active"));
      button.classList.add("active"); state[group.dataset.choice]=button.dataset.value;
      $(group.dataset.choice === "status" ? "formStatus" : "formFocus").value=button.dataset.value;
      updateScore();
    });
  });

  [pay,years,tsp,correction,age,coverage].forEach(input=>input.addEventListener("input", update));
  function updateScore(){
    const score=50+(state.status?25:0)+(state.focus?25:0);
    $("score").textContent=score; $("formScore").value=score; $("progressBar").style.width=score+"%";
  }
  function update(){
    const p=Number(pay.value), y=Number(years.value), t=Number(tsp.value), c=Number(correction.value);
    const legacy=p*.025*y, brs=p*.02*y;
    $("payOut").textContent=money(p)+"/mo"; $("yearsOut").textContent=y+" yrs"; $("tspOut").textContent=money(t);
    $("legacyPension").textContent=money(legacy); $("brsPension").textContent=money(brs); $("pensionGap").textContent=money(legacy-brs);
    $("correctionOut").textContent=(c<0?"−":"")+Math.abs(c)+"%"; $("exposed").textContent=money(t*(1+c/100)); $("protected").textContent=money(t); $("shielded").textContent=money(t-(t*(1+c/100)));
    $("ageOut").textContent=age.value+" yrs"; $("coverageOut").textContent=money(Number(coverage.value));
    $("formPay").value=p; $("formYears").value=y; $("formTsp").value=t;
    drawChart(t);
  }

  function paths(principal){
    const market=[principal], protectedPath=[principal], optimized=[principal];
    for(let i=1;i<=20;i++){
      const correctionYear=i%5===0;
      market.push(market[i-1]*(correctionYear?.82:1.07));
      protectedPath.push(protectedPath[i-1]*1.047);
      optimized.push(optimized[i-1]*1.056);
    }
    return [market,protectedPath,optimized];
  }
  function drawChart(principal){
    const canvas=$("growthChart"), ctx=canvas.getContext("2d"), series=paths(principal), colors=["#101215","#d4af37","#246849"];
    const dpr=Math.min(window.devicePixelRatio||1,2), cssWidth=canvas.clientWidth||900, cssHeight=Math.max(250,cssWidth*.4);
    canvas.width=cssWidth*dpr; canvas.height=cssHeight*dpr; ctx.scale(dpr,dpr); ctx.clearRect(0,0,cssWidth,cssHeight);
    const pad={l:58,r:18,t:20,b:34}, w=cssWidth-pad.l-pad.r, h=cssHeight-pad.t-pad.b, max=Math.max(...series.flat())*1.08;
    ctx.font="12px system-ui";ctx.fillStyle="#6b6f76";ctx.strokeStyle="#e5e2da";ctx.lineWidth=1;
    for(let i=0;i<=4;i++){const yy=pad.t+h-(h*i/4);ctx.beginPath();ctx.moveTo(pad.l,yy);ctx.lineTo(cssWidth-pad.r,yy);ctx.stroke();ctx.fillText("$"+Math.round(max*i/4/1000)+"k",4,yy+4)}
    [0,5,10,15,20].forEach(i=>ctx.fillText("Yr "+i,pad.l+w*i/20-12,cssHeight-8));
    series.forEach((values,index)=>{ctx.beginPath();values.forEach((v,i)=>{const x=pad.l+w*i/20,y=pad.t+h-(v/max*h);i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.strokeStyle=colors[index];ctx.lineWidth=3;ctx.stroke()});
    $("market20").textContent=money(series[0][20]); $("fia20").textContent=money(series[1][20]); $("optimized20").textContent=money(series[2][20]);
  }

  $("roadmapForm").addEventListener("submit", async event => {
    event.preventDefault(); const form=event.currentTarget, status=$("formStatusMessage"), submit=form.querySelector("button[type=submit]");
    if(!form.reportValidity())return; status.textContent="Sending securely…"; submit.disabled=true;
    const values=Object.fromEntries(new FormData(form).entries());
    try{
      const response=await fetch("/veteran-roadmap/api/submissions",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({tool:"veteran-roadmap",sourceHost:location.hostname,name:values.name,email:values.email,phone:values.phone,company:values.company,data:values})});
      if(!response.ok)throw new Error("submit failed");
      status.style.color="#16794b";status.textContent="Thank you. Your roadmap request was sent securely to Watts Unified Solutions.";form.reset();
    }catch(error){status.style.color="#b42318";status.textContent="We could not send this yet. Please try again or contact Watts Unified Solutions."}
    finally{submit.disabled=false}
  });

  window.addEventListener("resize",()=>drawChart(Number(tsp.value)),{passive:true});
  $("copyrightYear").textContent=new Date().getFullYear(); updateScore(); update();
})();
