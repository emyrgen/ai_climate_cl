const scenes = [
  {"chapter":"01","eyebrow":"Opening Thesis","title":"EMYRGEN Builds the Operating System for Climate Action","subtitle":"An AI-enabled platform that detects climate risk, deploys aerial execution, verifies outcomes, and monetizes them — in one integrated stack.","takeaway":["A platform business, not a single-aircraft product","Software, field execution, and audit-grade MRV in one stack","Built for repeatable, national-scale deployment"],"stats":[{"label":"Format","value":"AI + Ops + MRV"},{"label":"Model","value":"Platform + Execution"},{"label":"Beachhead","value":"Brazil"}],"image":"assets/scene_01.jpg"},
  {"chapter":"02","eyebrow":"Why Now","title":"Brazil's Climate Crisis Is a Multi-Billion-Dollar Demand Signal","subtitle":"Wildfire, land degradation, drought, and hydrology loss are driving structural, recurring spend on intervention — not more reports.","takeaway":["A vast, underserved restoration and resilience market","Risk compounds across land, water, agriculture, infrastructure","Inaction means recurring, escalating economic loss"],"stats":[{"label":"Risk Types","value":"Fire / Drought / Land"},{"label":"Demand","value":"Intervention at Scale"},{"label":"Timing","value":"Capital Forming Now"}],"image":"assets/scene_02.jpg"},
  {"chapter":"03","eyebrow":"Market Gap","title":"Today's Solutions Are Fragmented and Unverifiable","subtitle":"Satellites, drones, consultants, and carbon programs operate in silos. Nothing connects detection to execution to proof.","takeaway":["Abundant data, disconnected execution","Verification is slow, costly, or incomplete","Fragmentation caps commercial scalability"],"stats":[{"label":"Gap","value":"No Unified System"},{"label":"Pain","value":"Slow, Unproven"},{"label":"Opening","value":"Integrated Platform"}],"image":"assets/scene_03.jpg"},
  {"chapter":"04","eyebrow":"Platform Model","title":"One Platform: From Risk Signal to Revenue","subtitle":"EMYRGEN links AI risk intelligence, aerial fleet operations, mission planning, MRV, and revenue-linked outcomes in a single operating model.","takeaway":["Detect, plan, execute, verify, monetize","One architecture across the full lifecycle","Defensible where point solutions are not"],"stats":[{"label":"Stack","value":"5 Connected Layers"},{"label":"Role","value":"Infrastructure"},{"label":"Edge","value":"System Integration"}],"image":"assets/scene_04.jpg"},
  {"chapter":"05","eyebrow":"Fleet Layer","title":"EGX-10: The Sensing and Verification Layer","subtitle":"The platform's eyes — mapping, surveillance, field measurement, and MRV-grade evidence that feeds every downstream decision.","takeaway":["Mapping, sensing, and situational awareness","Feeds the AI engine and mission planner","Converts operations into measurable proof"],"stats":[{"label":"Primary Role","value":"Sense + Verify"},{"label":"Output","value":"Field Intelligence"},{"label":"Edge","value":"Proprietary Data"}],"image":"assets/scene_05.jpg"},
  {"chapter":"06","eyebrow":"Execution Layer","title":"EGX-200: The Field Execution Layer","subtitle":"The platform's hands — payload delivery, treatment missions, and repeatable restoration work that turn plans into outcomes.","takeaway":["Moves the model from analytics to action","Creates repeatable intervention capacity","Anchors revenue to mission execution"],"stats":[{"label":"Primary Role","value":"Intervene"},{"label":"Value","value":"Execution Capacity"},{"label":"Edge","value":"Real-World Utility"}],"image":"assets/scene_06.jpg"},
  {"chapter":"07","eyebrow":"Scale Layer","title":"Heavy-Lift Assets Unlock Industrial Scale","subtitle":"Heavy-lift aircraft extend the fleet into wildfire response, biomass movement, corridor treatment, and regional deployment.","takeaway":["Industrial reach far beyond pilots","Supports high-intensity, high-value missions","Signals scalability to capital partners"],"stats":[{"label":"Primary Role","value":"Scale"},{"label":"Mission Type","value":"Industrial Ops"},{"label":"Edge","value":"Growth Capacity"}],"image":"assets/scene_07.jpg"},
  {"chapter":"08","eyebrow":"Fleet System","title":"The Fleet Operates as One Coordinated System","subtitle":"EGX-10 finds and verifies, EGX-200 executes, heavy-lift scales. Orchestration — not any single aircraft — is the value.","takeaway":["Different assets, one platform logic","Each asset carries a distinct commercial role","The system is worth more than its parts"],"stats":[{"label":"EGX-10","value":"Find + Verify"},{"label":"EGX-200","value":"Execute"},{"label":"Heavy-Lift","value":"Scale"}],"image":"assets/scene_08.jpg"},
  {"chapter":"09","eyebrow":"AI Layer","title":"The Risk Engine Tells Capital Exactly Where to Work","subtitle":"AI prioritizes intervention zones by risk, carbon potential, hydrology, vegetation stress, and operational economics.","takeaway":["Prioritizes intervention, not just observation","Drives disciplined capital deployment","Improves both impact and capital efficiency"],"stats":[{"label":"Inputs","value":"Risk + Ecology + Ops"},{"label":"Output","value":"Priority Zones"},{"label":"Edge","value":"Capital Discipline"}],"image":"assets/scene_09.jpg"},
  {"chapter":"10","eyebrow":"Planning Layer","title":"Climate Intelligence Becomes Deployable Missions","subtitle":"The mission planner converts priority zones into executable, costed work packages — zones, assets, sequence, and intervention logic.","takeaway":["Bridges AI to field operations","Produces deployable, costed work packages","Enables repeatable multi-zone programs"],"stats":[{"label":"From","value":"Risk Maps"},{"label":"To","value":"Mission Packages"},{"label":"Edge","value":"Scalable Process"}],"image":"assets/scene_10.jpg"},
  {"chapter":"11","eyebrow":"Execution Model","title":"Execution Is Where the Value Is Created","subtitle":"Value accrues when missions run in the field — reducing risk, restoring hydrology, and generating verifiable outcomes.","takeaway":["Field operations drive monetization","Execution separates EMYRGEN from pure software","Repeatable missions create repeatable revenue"],"stats":[{"label":"Illustrative Missions","value":"1,200+ / 12 mos"},{"label":"Model","value":"Ops at Scale"},{"label":"Edge","value":"Revenue Engine"}],"image":"assets/scene_11.jpg"},
  {"chapter":"12","eyebrow":"MRV Layer","title":"MRV Turns Field Work Into Auditable, Bankable Proof","subtitle":"MRV connects activity to confidence and monetization — the trust layer capital partners and environmental markets require.","takeaway":["Credible, audit-grade environmental accounting","Stronger reporting and defensibility","The bridge from outcome to revenue"],"stats":[{"label":"Role","value":"Proof Layer"},{"label":"Benefit","value":"Auditability"},{"label":"Edge","value":"Trust to Conversion"}],"image":"assets/scene_12.jpg"},
  {"chapter":"13","eyebrow":"Outcome Scenario","title":"Designed to Produce Measurable, Monetizable Outcomes","subtitle":"The Brazil scenario sets outcome targets that make the model measurable — illustrative proof that operations convert into value.","takeaway":["Illustrative scope: 185,000 hectares restored","Illustrative wildfire-risk reduction: 42%","Illustrative water-retention gain: +31%"],"stats":[{"label":"Habitat Score","value":"+18%"},{"label":"Carbon Units","value":"22.4M"},{"label":"Basis","value":"Illustrative"}],"image":"assets/scene_13.jpg"},
  {"chapter":"14","eyebrow":"Who Pays","title":"A Diversified Base of Willing Payers","subtitle":"Governments, utilities, landowners, agribusiness, carbon developers, and climate-finance institutions all hold budget to deploy.","takeaway":["Governments fund resilience and restoration","Utilities and land operators pay to cut risk","Developers pay for MRV and execution"],"stats":[{"label":"Public Sector","value":"Programs + Contracts"},{"label":"Private Sector","value":"Utilities + Land"},{"label":"Climate Finance","value":"Developers + Funds"}],"image":"assets/scene_14.jpg"},
  {"chapter":"15","eyebrow":"Revenue Stack","title":"Five Revenue Streams From One Deployment","subtitle":"Deployment fees, mission execution, MRV services, software access, and outcome-linked climate value — layered on a single platform.","takeaway":["Platform and software fees (recurring)","Mission execution and ops-as-a-service","MRV plus environmental-value participation"],"stats":[{"label":"Core Revenue","value":"Deployment + Services"},{"label":"Recurring","value":"Software + MRV"},{"label":"Upside","value":"Outcome Participation"}],"image":"assets/scene_15.jpg"},
  {"chapter":"16","eyebrow":"Monetization","title":"Verified Outcomes Become Tradable Revenue Assets","subtitle":"Carbon, biodiversity, and water-security value emerge when outcomes are verified and matched to market demand.","takeaway":["Illustrative carbon pathway: 22.4M units","Illustrative biodiversity pathway: 3.1M credits","Illustrative water-security pathway: 1.4M credits"],"stats":[{"label":"Carbon Range","value":"$28-$45"},{"label":"Biodiversity","value":"$40-$120"},{"label":"Water","value":"$15-$35"}],"image":"assets/scene_16.jpg"},
  {"chapter":"17","eyebrow":"Value Potential","title":"Illustrative Annual Value Pathway: $1.1B-$2.4B","subtitle":"Under scenario assumptions, stacked environmental pathways point to a large annual value range — illustrative, not guaranteed.","takeaway":["Illustrative annual climate-value: $1.1B-$2.4B","Stacked pathways compound the opportunity","Service revenue sits alongside credit upside"],"stats":[{"label":"Value Type","value":"Illustrative Range"},{"label":"Guarantee","value":"No"},{"label":"Logic","value":"Scale Potential"}],"image":"assets/scene_17.jpg"},
  {"chapter":"18","eyebrow":"Funding Model","title":"Blended Capital De-Risks the Deployment","subtitle":"Public programs, private capital, development finance, and outcome revenue align into one efficient deployment structure.","takeaway":["Public capital backs resilience and restoration","Private capital accelerates deployment","Outcome revenue sustains the model"],"stats":[{"label":"Capital Sources","value":"Public + Private"},{"label":"Support","value":"Banks + Programs"},{"label":"Logic","value":"De-Risking"}],"image":"assets/scene_18.jpg"},
  {"chapter":"19","eyebrow":"Use of Funds","title":"Capital Has a Clear Path to Revenue","subtitle":"New funding moves the company to revenue: platform software, fleet readiness, pilots, partnerships, MRV workflows, and commercialization.","takeaway":["Advance AI software and mission tools","Build fleet and deployment readiness","Launch pilots and convert to contracts"],"stats":[{"label":"Software","value":"Platform Buildout"},{"label":"Fleet","value":"Readiness + Ops"},{"label":"Commercial","value":"Pilots + Partners"}],"image":"assets/scene_19.jpg"},
  {"chapter":"20","eyebrow":"Moat","title":"The Moat Is System Integration","subtitle":"The investable edge is not one aircraft or dashboard — it's an integrated stack linking intelligence, deployment, MRV, and revenue.","takeaway":["Far more defensible than a point solution","Cross-layer value is hard to replicate","Platform depth compounds the advantage"],"stats":[{"label":"Moat","value":"Integrated Stack"},{"label":"Differentiator","value":"Execution + Proof"},{"label":"Logic","value":"Strategic Value"}],"image":"assets/scene_20.jpg"},
  {"chapter":"21","eyebrow":"Scale Path","title":"Brazil Is the Beachhead, Not the Ceiling","subtitle":"Proven in Brazil, the platform extends to wildfire, drought, restoration, utility, and agricultural-resilience markets worldwide.","takeaway":["Brazil is a high-need proof market","The model adapts to comparable regions","Capital follows scalable growth, not one-offs"],"stats":[{"label":"Beachhead","value":"Brazil"},{"label":"Expansion","value":"Global Risk Markets"},{"label":"Logic","value":"Growth Story"}],"image":"assets/scene_21.jpg"},
  {"chapter":"22","eyebrow":"Capital Upside","title":"How This Deployment Compounds Enterprise Value","subtitle":"Capital funds pilots, secures deployments, validates MRV, grows recurring revenue, and expands strategic value — step by step.","takeaway":["Capital funds proof and commercialization","Traction builds recurring revenue","Scale compounds enterprise value"],"stats":[{"label":"Step 1","value":"Pilot Proof"},{"label":"Step 2","value":"Contracted Revenue"},{"label":"Step 3","value":"Scale Value"}],"image":"assets/scene_22.jpg"},
  {"chapter":"23","eyebrow":"Credibility","title":"Built on Evidence, Not Hype","subtitle":"The thesis rests on pilots, verified outcomes, payer validation, and scalable unit economics — illustrative scenarios, never guarantees.","takeaway":["Illustrative scenarios, not promises","Proof through customers, pilots, and MRV","Disciplined scale over hype"],"stats":[{"label":"Basis","value":"Evidence-Based"},{"label":"Path","value":"Pilot to Scale"},{"label":"Logic","value":"Risk-Aware"}],"image":"assets/scene_23.jpg"},
  {"chapter":"24","eyebrow":"The Ask","title":"Why EMYRGEN Merits Your Capital","subtitle":"An integrated climate-infrastructure platform: AI intelligence, field execution, audit-grade MRV, and multiple monetization pathways.","takeaway":["Not a drone vendor — an operating platform","Measurable outcomes and multiple revenue paths","A capital story built on scale, proof, and value"],"stats":[{"label":"What It Is","value":"Climate Infrastructure"},{"label":"Why It Matters","value":"Scalable + Measurable"},{"label":"Ask","value":"Fund the Next Stage"}],"image":"assets/scene_24.jpg"}
];
const logo = "assets/emyrgen_group_inc_logo.png";
const phone = document.getElementById('phone');
const progressFill = document.getElementById('progressFill');
let current = -1;
let playing = true;
let timer = null;
const DURATION = 9200;

function renderBullets(items){
  return items.map(item => `<li>${item}</li>`).join('');
}
function renderStats(items){
  return items.map(item => `<div class="stat"><span class="s-label">${item.label}</span><span class="s-value">${item.value}</span></div>`).join('');
}
function renderScene(){
  if (current < 0) return;
  const s = scenes[current];
  phone.innerHTML = `
    <section class="scene active">
      <div class="bg" style="background-image:url('${s.image}')"></div>
      <div class="top-shade"></div>
      <div class="bottom-shade"></div>
      <div class="vignette"></div>
      <div class="scan-line"></div>
      <div class="header">
        <div class="brand"><img src="${logo}" alt="EMYRGEN GROUP INC"></div>
        <div class="scene-no">Scene ${s.chapter} / 24</div>
      </div>
      <div class="copy">
        <div class="eyebrow">${s.eyebrow}</div>
        <h1>${s.title}</h1>
        <p class="lead">${s.subtitle}</p>
        <ul class="points">${renderBullets(s.takeaway)}</ul>
        <div class="stat-strip">${renderStats(s.stats)}</div>
      </div>
    </section>`;
  progressFill.style.width = `${((current + 1) / scenes.length) * 100}%`;
}
function showScene(index){ current = (index + scenes.length) % scenes.length; renderScene(); }
function nextScene(){ if(current < 0) showScene(0); else showScene(current + 1); }
function prevScene(){ if(current < 0) showScene(scenes.length - 1); else showScene(current - 1); }
function startAutoplay(){ clearInterval(timer); if(!playing) return; timer = setInterval(() => nextScene(), DURATION); }
function togglePlay(){ playing = !playing; document.getElementById('playBtn').textContent = playing ? 'Pause' : 'Play'; startAutoplay(); }

document.getElementById('prevBtn').addEventListener('click', () => { prevScene(); startAutoplay(); });
document.getElementById('nextBtn').addEventListener('click', () => { nextScene(); startAutoplay(); });
document.getElementById('replayBtn').addEventListener('click', () => { location.reload(); });
document.getElementById('playBtn').addEventListener('click', togglePlay);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') { nextScene(); startAutoplay(); }
  if (e.key === 'ArrowLeft') { prevScene(); startAutoplay(); }
  if (e.key === ' ') { e.preventDefault(); togglePlay(); }
});

let startX = null;
document.addEventListener('touchstart', (e) => { if (e.touches && e.touches[0]) startX = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend', (e) => {
  if (startX === null || !e.changedTouches || !e.changedTouches[0]) return;
  const dx = e.changedTouches[0].clientX - startX;
  if (Math.abs(dx) > 42) { dx < 0 ? nextScene() : prevScene(); startAutoplay(); }
  startX = null;
}, { passive: true });

progressFill.style.width = '0%';
setTimeout(() => { nextScene(); startAutoplay(); }, 6500);
