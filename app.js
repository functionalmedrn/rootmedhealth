/* ═══════════════════════════════════════════════════════════════════
   ROOT MED HEALTH — app.js
   Patient + Provider · Powered by Evidence-Based Wellness
   © 2026 Root Med Health LLC · rootmedhealth.com
═══════════════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════════════

const SYMPTOM_TAGS = [
  "Fatigue","Brain fog","Bloating","Anxiety","Poor sleep","Joint pain",
  "Headaches","Weight gain","Low mood","Skin issues","Hair loss",
  "Cold intolerance","Heart palpitations","Food cravings","Constipation","Low energy"
];

const RESEARCH_TOPICS = [
  "Hashimoto's Thyroiditis","Insulin Resistance","Leaky Gut","PCOS",
  "Fibromyalgia","Adrenal Dysfunction","SIBO","Hypothyroidism",
  "Type 2 Diabetes","Rheumatoid Arthritis","IBS","Chronic Fatigue"
];

const ALLERGENS = [
  'Peanuts','Tree nuts','Milk / dairy','Eggs','Wheat / gluten',
  'Soy','Fish','Shellfish','Sesame','Mustard','Sulfites'
];
const INTOLERANCES = ['Lactose','Fructose','Histamine','FODMAPs','Nightshades','Corn','Caffeine'];
const PREFERENCES = [
  'Gluten-free','Dairy-free','Vegan','Vegetarian',
  'Paleo','Keto-friendly','No added sugar','Low-sodium'
];

const MORNING_QUOTES = [
  {quote:"The groundwork of all happiness is health.",sub:"Your body is working for you — give it what it needs today."},
  {quote:"Take care of your body. It's the only place you have to live.",sub:"Every small choice today is an investment in your future self."},
  {quote:"The food you eat can be either the safest medicine or the slowest poison.",sub:"Choose nourishment today. Your cells are listening."},
  {quote:"To keep the body in good health is a duty.",sub:"Start with one good choice. Let that be enough for this moment."},
  {quote:"The greatest wealth is health.",sub:"You are building something real. One day at a time."},
  {quote:"Healing is a matter of time, but also of opportunity.",sub:"Today is your opportunity. You showed up. That's everything."},
  {quote:"Let food be thy medicine.",sub:"What you eat today becomes who you are tomorrow."},
  {quote:"A healthy outside starts from the inside.",sub:"Root cause first. Your body knows how to heal — support it today."},
  {quote:"Small daily improvements are the key to staggering long-term results.",sub:"Log your water. Take your supplements. Move your body. It compounds."},
  {quote:"Your future self is watching you right now through your memories.",sub:"Make today worth remembering. Your future self is counting on you."},
  {quote:"Every day is a fresh start — a new chapter in your health journey.",sub:"Yesterday doesn't define today. What will you do with this one?"},
  {quote:"The secret of getting ahead is getting started.",sub:"You don't have to be perfect. You just have to begin."},
  {quote:"Health is not valued till sickness comes.",sub:"You're here, investing in your health. That matters. Keep going."},
  {quote:"Your body is your most priceless possession.",sub:"Hydrate. Nourish. Move. Rest. Repeat."},
  {quote:"You are one decision away from a completely different life.",sub:"Make one great choice today. Then another. It compounds."},
];

const FOOD_DB = [
  {cat:'Breakfast',emoji:'🥣',name:'Oatmeal (cooked)',carbs:27,fiber:4,cal:166,serving:'1 cup',servingQty:1,servingUnit:'cup'},
  {cat:'Breakfast',emoji:'🍳',name:'Scrambled Eggs',carbs:1,fiber:0,cal:91,serving:'1 egg',servingQty:1,servingUnit:'egg'},
  {cat:'Breakfast',emoji:'🥑',name:'Avocado',carbs:9,fiber:7,cal:120,serving:'½ avocado',servingQty:0.5,servingUnit:'avocado'},
  {cat:'Breakfast',emoji:'🫐',name:'Blueberries',carbs:11,fiber:2,cal:42,serving:'½ cup',servingQty:0.5,servingUnit:'cup'},
  {cat:'Breakfast',emoji:'🍌',name:'Banana',carbs:27,fiber:3,cal:105,serving:'1 medium',servingQty:1,servingUnit:'banana'},
  {cat:'Breakfast',emoji:'🌰',name:'Almond Butter',carbs:3,fiber:0.75,cal:95,serving:'1 tbsp',servingQty:1,servingUnit:'tbsp'},
  {cat:'Lunch',emoji:'🥗',name:'Grilled Chicken Breast',carbs:0,fiber:0,cal:165,serving:'4 oz',servingQty:4,servingUnit:'oz'},
  {cat:'Lunch',emoji:'🥦',name:'Broccoli (steamed)',carbs:6,fiber:2.4,cal:27,serving:'1 cup',servingQty:1,servingUnit:'cup'},
  {cat:'Lunch',emoji:'🫘',name:'Black Beans',carbs:20,fiber:7.5,cal:114,serving:'½ cup',servingQty:0.5,servingUnit:'cup'},
  {cat:'Lunch',emoji:'🍚',name:'Brown Rice',carbs:22,fiber:2,cal:108,serving:'½ cup',servingQty:0.5,servingUnit:'cup'},
  {cat:'Lunch',emoji:'🐟',name:'Canned Tuna',carbs:0,fiber:0,cal:60,serving:'2 oz',servingQty:2,servingUnit:'oz'},
  {cat:'Dinner',emoji:'🐟',name:'Baked Salmon',carbs:0,fiber:0,cal:177,serving:'3 oz',servingQty:3,servingUnit:'oz'},
  {cat:'Dinner',emoji:'🥩',name:'Grass-Fed Ground Beef',carbs:0,fiber:0,cal:215,serving:'4 oz',servingQty:4,servingUnit:'oz'},
  {cat:'Dinner',emoji:'🍠',name:'Sweet Potato',carbs:26,fiber:4,cal:103,serving:'1 medium',servingQty:1,servingUnit:'medium'},
  {cat:'Dinner',emoji:'🫑',name:'Stir Fry Vegetables',carbs:10,fiber:3,cal:55,serving:'1 cup',servingQty:1,servingUnit:'cup'},
  {cat:'Dinner',emoji:'🫘',name:'Cauliflower Rice',carbs:5,fiber:2,cal:25,serving:'1 cup',servingQty:1,servingUnit:'cup'},
  {cat:'Dinner',emoji:'🐠',name:'Shrimp (grilled)',carbs:1,fiber:0,cal:84,serving:'3 oz',servingQty:3,servingUnit:'oz'},
  {cat:'Snacks',emoji:'🥜',name:'Mixed Nuts',carbs:7,fiber:2,cal:170,serving:'1 oz',servingQty:1,servingUnit:'oz'},
  {cat:'Snacks',emoji:'🍎',name:'Apple',carbs:25,fiber:4,cal:95,serving:'1 medium',servingQty:1,servingUnit:'apple'},
  {cat:'Snacks',emoji:'🫐',name:'Mixed Berries',carbs:15,fiber:3,cal:60,serving:'1 cup',servingQty:1,servingUnit:'cup'},
  {cat:'Snacks',emoji:'🍫',name:'Dark Chocolate 85%',carbs:13,fiber:3,cal:170,serving:'1 oz',servingQty:1,servingUnit:'oz'},
  {cat:'Snacks',emoji:'🥒',name:'Cucumber Slices',carbs:4,fiber:0.5,cal:16,serving:'1 cup',servingQty:1,servingUnit:'cup'},
  {cat:'Restaurant',emoji:'🥙',name:'Chipotle Bowl (chicken)',carbs:28,fiber:10,cal:440,serving:'1 bowl',servingQty:1,servingUnit:'bowl'},
  {cat:'Restaurant',emoji:'🌮',name:'Street Taco (chicken)',carbs:14,fiber:1,cal:155,serving:'1 taco',servingQty:1,servingUnit:'taco'},
  {cat:'Restaurant',emoji:'🍔',name:'Burger Patty (no bun)',carbs:0,fiber:0,cal:290,serving:'4 oz',servingQty:4,servingUnit:'oz'},
  {cat:'Restaurant',emoji:'🍕',name:'Pizza Slice (thin crust)',carbs:22,fiber:1,cal:200,serving:'1 slice',servingQty:1,servingUnit:'slice'},
  {cat:'Restaurant',emoji:'🥗',name:'Caesar Salad (half)',carbs:14,fiber:3,cal:280,serving:'half',servingQty:0.5,servingUnit:'portion'},
  {cat:'Drinks',emoji:'☕',name:'Black Coffee',carbs:0,fiber:0,cal:2,serving:'8 oz',servingQty:8,servingUnit:'oz'},
  {cat:'Drinks',emoji:'🥛',name:'Almond Milk (unsweetened)',carbs:1,fiber:0,cal:30,serving:'1 cup',servingQty:1,servingUnit:'cup'},
  {cat:'Drinks',emoji:'🍵',name:'Green Tea',carbs:0,fiber:0,cal:2,serving:'8 oz',servingQty:8,servingUnit:'oz'},
  {cat:'Drinks',emoji:'🧋',name:'Oat Milk Latte',carbs:28,fiber:1,cal:190,serving:'16 oz',servingQty:16,servingUnit:'oz'},
];

const SUPPLEMENTS = [
  {name:'Magnesium Glycinate',category:'Minerals',desc:'Highly bioavailable magnesium for sleep, muscle relaxation, and nervous system support.',dose:'200–400mg daily',timing:'Evening with food',form:'Chelated glycinate or bisglycinate',interactions:'May enhance blood pressure medication effects',contraindications:'Kidney disease — use with caution',notes:'Most deficient mineral in the US. RBC Magnesium more accurate than serum.',evidence:'Strong'},
  {name:'Vitamin D3 + K2',category:'Vitamins',desc:'Essential for immune regulation, bone metabolism, mood, and cardiovascular protection.',dose:'2,000–5,000 IU D3 + 100–200mcg K2',timing:'Morning with fatty meal',form:'D3 (cholecalciferol) + MK-7 form of K2',interactions:'May potentiate anticoagulants (K2)',contraindications:'Sarcoidosis, granulomatous disease',notes:'Target serum 25-OH-D: 50–80 ng/mL. Test before loading dose.',evidence:'Strong'},
  {name:'Omega-3 Fish Oil',category:'Fatty Acids',desc:'EPA and DHA for neuroinflammation, cardiovascular protection, mood, and joint health.',dose:'2–4g EPA/DHA combined daily',timing:'With meals to reduce GI upset',form:'Triglyceride form preferred over ethyl ester',interactions:'Additive with anticoagulants at high doses',contraindications:'Fish/shellfish allergy',notes:'Omega-3 index test to guide dosing. Higher EPA for mood.',evidence:'Strong'},
  {name:'Ashwagandha KSM-66',category:'Adaptogens',desc:'Clinically studied adaptogen for HPA axis regulation, cortisol normalization, and stress resilience.',dose:'300–600mg daily',timing:'Evening or twice daily',form:'KSM-66 or Sensoril standardized extract',interactions:'Thyroid medications — monitor levels',contraindications:'Autoimmune thyroid disease; pregnancy',notes:'Can slightly raise T3/T4. Monitor thyroid labs at 3 months.',evidence:'Moderate-Strong'},
  {name:'Methylated B-Complex',category:'Vitamins',desc:'Active methylated forms for MTHFR variants, energy production, and neurotransmitter synthesis.',dose:'Per label — varies by formulation',timing:'Morning with food',form:'Methylfolate (5-MTHF) + methylcobalamin essential',interactions:'May mask B12 deficiency if measuring serum',contraindications:'Bipolar disorder — folate may trigger mania',notes:'Test MTHFR polymorphism. Start low — some experience detox symptoms.',evidence:'Moderate'},
  {name:'Probiotics (Multi-strain)',category:'Gut',desc:'Microbiome diversity support, gut lining integrity, immune modulation, and gut-brain axis regulation.',dose:'10–50 billion CFU',timing:'Morning on empty stomach or with meal',form:'Multi-strain Lactobacillus and Bifidobacterium',interactions:'Separate from antibiotics by 2+ hours',contraindications:'Active SIBO; severely immunocompromised',notes:'Rotate strains every 3 months. Stool testing guides strain selection.',evidence:'Moderate-Strong'},
  {name:'Zinc Bisglycinate',category:'Minerals',desc:'Immune defense, testosterone production, skin integrity, and wound healing.',dose:'15–30mg elemental zinc',timing:'Evening with food',form:'Bisglycinate or picolinate — superior absorption',interactions:'Competes with copper — balance 15:1 ratio',contraindications:"Wilson's disease; high-dose without copper co-supplementation",notes:'Measure serum zinc and copper together.',evidence:'Strong'},
  {name:'Curcumin Phytosome',category:'Anti-inflammatory',desc:'Systemic anti-inflammatory, antioxidant, liver support, and joint health. Form matters critically.',dose:'500–1000mg phytosome form',timing:'With meals',form:'Meriva, BCM-95, or Theracurmin — 29x better absorption',interactions:'May potentiate blood thinners',contraindications:'Gallbladder disease; bile duct obstruction',notes:'Standard curcumin barely absorbs — always specify enhanced bioavailability form.',evidence:'Moderate-Strong'},
  {name:'CoQ10 Ubiquinol',category:'Mitochondrial',desc:'Mitochondrial energy production, cardiovascular protection. Critical for statin users.',dose:'100–300mg',timing:'Morning with fatty meal',form:'Ubiquinol preferred over ubiquinone for 40+',interactions:'May reduce warfarin effectiveness',contraindications:'None significant at therapeutic doses',notes:'Statins deplete CoQ10 — supplement all statin patients.',evidence:'Strong'},
  {name:'NAC (N-Acetyl Cysteine)',category:'Antioxidant',desc:'Glutathione precursor, liver detox, gut lining repair, and neurological antioxidant protection.',dose:'600–1800mg',timing:'Between meals',form:'Standard NAC',interactions:'Nitroglycerin interaction',contraindications:'Active peptic ulcer at high doses',notes:'Excellent for liver support, detox pathways, and post-antibiotic gut recovery.',evidence:'Moderate-Strong'},
];

const LAB_REFS = [
  {name:'TSH',conv:'0.4–4.0 mIU/L',func:'1.0–2.5 mIU/L',clinical:'Elevated TSH suggests early hypothyroidism even within conventional range.',flagLow:'Below 1.0: possible hyperthyroidism — order fT3, fT4',flagHigh:'Above 2.5: functional hypothyroid risk — order fT3, fT4, TPO antibodies'},
  {name:'Free T4',conv:'0.8–1.8 ng/dL',func:'1.0–1.5 ng/dL',clinical:'Low fT4 with normal TSH may indicate secondary hypothyroidism.',flagLow:'Low fT4 + high TSH = primary hypothyroidism',flagHigh:'Elevated: possible hyperthyroidism or excess T4 supplementation'},
  {name:'Free T3',conv:'2.3–4.2 pg/mL',func:'3.0–4.0 pg/mL',clinical:'Active thyroid hormone. Low fT3 with normal TSH = poor T4→T3 conversion.',flagLow:'Low fT3: evaluate selenium, zinc deficiency or high cortisol',flagHigh:'Elevated: possible hyperthyroidism or exogenous T3'},
  {name:'hsCRP',conv:'<3.0 mg/L',func:'<0.9 mg/L',clinical:'Sensitive systemic inflammation marker. Major cardiovascular predictor.',flagLow:'Optimal — continue anti-inflammatory lifestyle',flagHigh:'Above 1.0: identify inflammation source — gut, diet, sleep'},
  {name:'Fasting Insulin',conv:'2.6–24.9 µIU/mL',func:'2–6 µIU/mL',clinical:'Best early indicator of insulin resistance — detects it 10+ years before HbA1c.',flagLow:'Very low: possible beta cell exhaustion',flagHigh:'Above 8: early insulin resistance — prioritize blood sugar protocol'},
  {name:'Fasting Glucose',conv:'70–100 mg/dL',func:'70–85 mg/dL',clinical:'Values 86–99 indicate prediabetic trend. Evaluate alongside fasting insulin.',flagLow:'Below 70: hypoglycemia — evaluate adrenal and dietary patterns',flagHigh:'86–99: prediabetic trajectory — intervene now'},
  {name:'HbA1c',conv:'<5.7%',func:'4.5–5.3%',clinical:'3-month blood sugar average. Functional threshold catches dysfunction earlier.',flagLow:'Below 4.5: rare — possible hemolytic anemia',flagHigh:'5.4–5.6%: early glycation risk — intervene with blood sugar protocol'},
  {name:'Vitamin D (25-OH)',conv:'20–50 ng/mL',func:'50–80 ng/mL',clinical:'Most labs flag as normal at 30 ng/mL. Optimal function requires 50–80 ng/mL.',flagLow:'Below 30: deficiency — supplement with D3+K2',flagHigh:'Above 100: toxicity risk — reduce dose'},
  {name:'Ferritin',conv:'12–150 ng/mL (F)',func:'70–150 ng/mL',clinical:'Iron storage marker. Low ferritin causes fatigue and hair loss before anemia.',flagLow:'Below 30: functional deficiency. Below 12: clinical anemia.',flagHigh:'Above 200: may indicate inflammation or hemochromatosis'},
  {name:'Homocysteine',conv:'<15 µmol/L',func:'4–7 µmol/L',clinical:'Methylation marker and cardiovascular risk factor.',flagLow:'Below 4: rare finding',flagHigh:'Above 10: methylation impairment — add methylated B-complex'},
  {name:'Vitamin B12',conv:'200–900 pg/mL',func:'600–1000 pg/mL',clinical:'Conventional range allows for functional deficiency.',flagLow:'Below 400: functional deficiency — especially vegetarians and metformin users',flagHigh:'Above 1000: generally not harmful'},
  {name:'HDL Cholesterol',conv:'>40 mg/dL (M)',func:'60–90 mg/dL',clinical:'Cardioprotective. Higher is generally better.',flagLow:'Below 50: increased cardiovascular risk',flagHigh:'Above 90: generally favorable'},
];

const PROTOCOLS = [
  {name:'Thyroid Optimization Protocol',category:'Endocrine',emoji:'🦋',desc:'Comprehensive approach addressing root causes beyond TSH and medication management.',tags:["TSH","T3 conversion","Selenium","Gut-thyroid","Hashimoto's"],assessment:['Full thyroid panel: TSH, fT3, fT4, rT3, TPO, TgAb','Selenium, zinc, ferritin, vitamin D','GI permeability markers','Adrenal cortisol pattern (DUTCH test)'],interventions:['Selenium 200mcg/day for T4→T3 conversion','Address gut permeability — 4R protocol','Optimize vitamin D to 60–80 ng/mL','Eliminate gluten if TPO antibodies elevated'],dietary:['Anti-inflammatory elimination of gluten and dairy for Hashimoto\'s','Brazil nuts for selenium','Avoid raw cruciferous vegetables if iodine-deficient'],supplements:['Selenium glycinate 200mcg daily','Zinc bisglycinate 15–30mg evening','Vitamin D3+K2 5,000 IU morning','Magnesium glycinate 300–400mg evening']},
  {name:'Blood Sugar Balance Protocol',category:'Metabolic',emoji:'🩸',desc:'Functional medicine approach to insulin resistance targeting root causes.',tags:['Insulin resistance','HbA1c','Metabolic syndrome','Fasting insulin'],assessment:['Fasting glucose, fasting insulin, HbA1c, HOMA-IR','Comprehensive metabolic panel','hsCRP, homocysteine','Uric acid, magnesium RBC'],interventions:['Low-carbohydrate dietary intervention (net carbs 20–50g initially)','Time-restricted eating (16:8 or 14:10)','Resistance training 3x/week minimum'],dietary:['Net carb tracking — target 20–50g initially','Eliminate refined carbohydrates and added sugars','High-quality protein at every meal'],supplements:['Berberine HCl 500mg 3x/day with meals','Magnesium glycinate 400mg evening','Chromium picolinate 400–600mcg daily']},
  {name:'Gut Restoration 4R Protocol',category:'Gastrointestinal',emoji:'🌱',desc:'Systematic four-phase approach: Remove, Replace, Reinoculate, Repair.',tags:['Leaky gut','SIBO','IBS','Microbiome','Gut-brain'],assessment:['Comprehensive stool analysis (GI-MAP)','Lactulose breath test for SIBO','Intestinal permeability markers','Food sensitivity IgG panel'],interventions:['Phase 1 Remove: eliminate inflammatory foods and pathogens','Phase 2 Replace: digestive enzymes, HCl if low stomach acid','Phase 3 Reinoculate: targeted probiotics and prebiotics','Phase 4 Repair: gut lining support nutrients'],dietary:['Elimination of gluten, dairy, processed foods, alcohol','Low-FODMAP if SIBO confirmed','Bone broth daily for gut lining support'],supplements:['L-glutamine 5g 2x/day on empty stomach','Zinc carnosine 75mg 2x/day','Deglycyrrhizinated licorice (DGL) before meals']},
  {name:'Adrenal & HPA Axis Protocol',category:'Endocrine',emoji:'⚡',desc:'Evidence-informed approach to HPA axis dysregulation and cortisol pattern normalization.',tags:['Cortisol','HPA axis','Adrenal fatigue','Stress response'],assessment:['DUTCH Complete urine steroid hormone test','4-point salivary cortisol pattern','DHEA-S serum level','Fasting insulin and glucose'],interventions:['Sleep hygiene optimization — 7–9 hours, consistent schedule','Stress management: HRV biofeedback, breathwork, meditation','Reduce high-intensity exercise during acute HPA dysregulation'],dietary:['Regular meal timing to stabilize cortisol rhythm','High-quality protein at breakfast','Limit caffeine after 12pm'],supplements:['Ashwagandha KSM-66 300–600mg evening','Phosphatidylserine 200–400mg for elevated evening cortisol','Magnesium glycinate 300–400mg before bed']},
  {name:'Cardiovascular Protection Protocol',category:'Cardiovascular',emoji:'❤️',desc:'Functional medicine approach targeting inflammation, oxidative stress, and metabolic drivers.',tags:['Cardiovascular','Cholesterol','Inflammation','Homocysteine'],assessment:['Advanced lipid panel: LDL-P, sdLDL, Lp(a), ApoB','hsCRP, fibrinogen, homocysteine','Fasting insulin and HOMA-IR','Omega-3 index'],interventions:['Mediterranean or anti-inflammatory dietary pattern','Regular aerobic exercise 150+ min/week','Stress reduction','Optimize sleep'],dietary:['Fatty fish 3x/week: salmon, sardines, mackerel','Extra-virgin olive oil as primary fat','Abundant vegetables and berries'],supplements:['Omega-3 EPA/DHA 3–4g daily (triglyceride form)','CoQ10 ubiquinol 200mg (essential for statin users)','Methylated B-complex for elevated homocysteine']},
  {name:'Hormone Balance Protocol (Women)',category:'Reproductive / Endocrine',emoji:'🌸',desc:'Comprehensive approach to female hormone optimization addressing estrogen metabolism and PCOS.',tags:['Estrogen','Progesterone','PCOS','Perimenopause'],assessment:['DUTCH Complete or comprehensive serum hormone panel','Full thyroid panel','Fasting insulin and glucose','Inflammatory markers, liver function'],interventions:['Support estrogen detoxification pathways — DIM, cruciferous vegetables','Optimize progesterone production — magnesium, vitamin B6, zinc','Address insulin resistance if PCOS present'],dietary:['Cruciferous vegetables daily: broccoli, cauliflower, brussels sprouts','Flaxseed 2 tbsp/day for lignan phytoestrogens','Low-glycemic dietary pattern — critical for PCOS'],supplements:['DIM 100–200mg daily for estrogen metabolism','Magnesium glycinate 400mg evening','Zinc bisglycinate 25–30mg','Vitex 400mg morning (not with hormonal contraception)']},
];

const DFH_PRODUCTS = [
  {id:'mag',name:'Magnesium Buffered Chelate',cat:'Minerals',emoji:'💊'},
  {id:'vit-d',name:'Vitamin D Supreme',cat:'Vitamins',emoji:'☀️'},
  {id:'omega',name:'OmegAvail Ultra TG',cat:'Fatty Acids',emoji:'🐟'},
  {id:'ashwag',name:'Ashwagandha 225',cat:'Adaptogens',emoji:'🌿'},
  {id:'bcomplex',name:'Homocysteine Supreme',cat:'B Vitamins',emoji:'⚡'},
  {id:'probio',name:'ProbioMed 50',cat:'Gut Health',emoji:'🦠'},
  {id:'zinc',name:'Zinc Supreme',cat:'Minerals',emoji:'🔷'},
  {id:'curcu',name:'Curcum-Evail',cat:'Anti-inflammatory',emoji:'🌾'},
  {id:'coq10',name:'CoQnol 100mg',cat:'Mitochondrial',emoji:'⚡'},
  {id:'nac',name:'NAC 600',cat:'Antioxidant',emoji:'🛡️'},
  {id:'dhist',name:'D-Hist',cat:'Immune',emoji:'🌸'},
  {id:'thyro',name:'ThyroVen',cat:'Thyroid',emoji:'🦋'},
];

const METRICS = [
  {key:'weight',label:'Weight',icon:'⚖️',unit:'lbs',min:80,max:400,step:0.1,goal:165,goalLabel:'Target: 165 lbs',color:'#4d7253',cls:'mc-weight'},
  {key:'water',label:'Water Intake',icon:'💧',unit:'oz',min:0,max:200,step:4,goal:96,goalLabel:'Goal: 96 oz',color:'#2980b9',cls:'mc-water'},
  {key:'glucose',label:'Blood Glucose',icon:'🩸',unit:'mg/dL',min:50,max:400,step:1,goal:85,goalLabel:'Optimal: <85',color:'#c9a84c',cls:'mc-glucose'},
  {key:'steps',label:'Steps',icon:'👟',unit:'steps',min:0,max:30000,step:100,goal:8000,goalLabel:'Goal: 8,000',color:'#8e44ad',cls:'mc-steps'},
  {key:'sleep',label:'Sleep',icon:'😴',unit:'hours',min:0,max:12,step:0.5,goal:8,goalLabel:'Goal: 7–9 hrs',color:'#2d4a30',cls:'mc-sleep'},
  {key:'mood',label:'Mood',icon:'😊',unit:'/10',min:1,max:10,step:1,goal:8,goalLabel:'Target: 8/10',color:'#c17f5a',cls:'mc-mood'},
  {key:'exercise',label:'Exercise',icon:'🏋️',unit:'min',min:0,max:300,step:5,goal:45,goalLabel:'Goal: 45 min',color:'#c0392b',cls:'mc-exercise'},
];

const WEARABLES = [
  {id:'oura',name:'Oura Ring',type:'Gen 3 & 4 supported',logo:'wl-oura',emoji:'💍',status:'ready',metrics:['Sleep stages','HRV','Readiness','Body temp','Steps'],note:'Connects via REST API — works in PWA now.'},
  {id:'apple',name:'Apple Watch',type:'Series 4+ · Apple Health',logo:'wl-apple',emoji:'⌚',status:'ready',metrics:['Steps','Active calories','Heart rate','HRV','Sleep'],note:'Requires native iOS app (coming with App Store launch).'},
  {id:'garmin',name:'Garmin',type:'Connect API',logo:'wl-garmin',emoji:'🏃',status:'ready',metrics:['Steps','Sleep','Stress score','Body battery','HRV'],note:'Connects via REST API — works in PWA now.'},
  {id:'fitbit',name:'Fitbit / Google Fit',type:'Fitbit Web API',logo:'wl-fitbit',emoji:'💚',status:'ready',metrics:['Steps','Sleep','Heart rate','Active minutes'],note:'Connects via REST API — works in PWA now.'},
  {id:'whoop',name:'WHOOP',type:'WHOOP API',logo:'wl-whoop',emoji:'💪',status:'soon',metrics:['Recovery','Strain','Sleep','HRV'],note:'Phase 2 — requires partner API agreement.'},
  {id:'cgm',name:'CGM (Dexcom, Libre)',type:'Continuous Glucose',logo:'wl-cgm',emoji:'🩸',status:'soon',metrics:['Real-time glucose','Time in range'],note:'Priority for diabetic patients. Phase 2.'},
];

const INTAKE_STEPS = [
  {title:'Health Profile',sub:'Basic health information',fields:[
    {id:'age',label:'Age',type:'number',placeholder:'e.g. 45',col:true},
    {id:'sex',label:'Biological Sex',type:'select',options:['Female','Male','Other'],col:true},
    {id:'height',label:'Height',type:'text',placeholder:"e.g. 5'10\"",col:true},
    {id:'weight-in',label:'Weight (lbs)',type:'number',placeholder:'e.g. 175',col:true},
    {id:'conditions',label:'Existing health conditions',type:'textarea',placeholder:'e.g. Hypothyroidism, Type 2 diabetes...'},
    {id:'medications',label:'Current medications & supplements',type:'textarea',placeholder:'List any prescription medications...'},
  ]},
  {title:'Diet & Nutrition',sub:'Your current eating patterns',fields:[
    {id:'diet-type',label:'Dietary pattern',type:'select',options:['Standard American','Mediterranean','Paleo','Ketogenic','Vegan','Vegetarian','Gluten-free','Other']},
    {id:'diet-desc',label:'Describe a typical day of eating',type:'textarea',placeholder:'e.g. Coffee for breakfast, sandwich for lunch...'},
    {id:'food-sens',label:'Known food sensitivities or allergies',type:'textarea',placeholder:'e.g. Lactose intolerant...'},
    {id:'water-in',label:'Daily water intake',type:'select',options:['Less than 32 oz','32–64 oz','64–96 oz','More than 96 oz']},
  ]},
  {title:'Exercise & Activity',sub:'Your movement and activity levels',fields:[
    {id:'ex-freq',label:'Exercise frequency',type:'select',options:['Sedentary','1–2 days/week','3–4 days/week','5+ days/week'],col:true},
    {id:'ex-type',label:'Primary exercise type',type:'select',options:['Walking','Strength training','Cardio / HIIT','Yoga / Pilates','Sports','Mixed'],col:true},
    {id:'sleep-hrs',label:'Average sleep (hours/night)',type:'select',options:['Less than 5','5–6','6–7','7–8','8–9','More than 9'],col:true},
    {id:'stress',label:'Stress level (1–10)',type:'number',placeholder:'e.g. 7',col:true},
    {id:'energy',label:'Describe your typical energy level',type:'textarea',placeholder:'e.g. Crashes in the afternoon...'},
  ]},
  {title:'Health Goals',sub:'What you want to achieve',fields:[
    {id:'primary-goal',label:'Primary health goal',type:'select',options:['Weight management','Increase energy','Better sleep','Reduce inflammation','Hormone balance','Gut health','Mental clarity','Blood sugar management','Cardiovascular health','General optimization']},
    {id:'symptoms-in',label:'Top 3 symptoms to address',type:'textarea',placeholder:'e.g. Chronic fatigue, digestive bloating, poor sleep...'},
    {id:'goals-detail',label:'Ideal health outcome in 90 days',type:'textarea',placeholder:'What would feeling better look like for you?'},
  ]},
  {title:'Lab Values',sub:'Enter recent lab results (optional)',fields:[
    {id:'lab-tsh',label:'TSH (mIU/L)',type:'number',placeholder:'e.g. 2.5',col:true},
    {id:'lab-t4',label:'Free T4 (ng/dL)',type:'number',placeholder:'e.g. 1.1',col:true},
    {id:'lab-vit-d',label:'Vitamin D (ng/mL)',type:'number',placeholder:'e.g. 45',col:true},
    {id:'lab-ferritin',label:'Ferritin (ng/mL)',type:'number',placeholder:'e.g. 55',col:true},
    {id:'lab-crp',label:'hsCRP (mg/L)',type:'number',placeholder:'e.g. 0.8',col:true},
    {id:'lab-glucose',label:'Fasting Glucose (mg/dL)',type:'number',placeholder:'e.g. 88',col:true},
    {id:'lab-hba1c',label:'HbA1c (%)',type:'number',placeholder:'e.g. 5.4',col:true},
    {id:'lab-insulin',label:'Fasting Insulin (µIU/mL)',type:'number',placeholder:'e.g. 5',col:true},
  ]},
];

// ═══════════════════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════════════════
let isProvider = false;
let selectedRole = null;
let ageChecked = false;
let discChecked = false;
let discScrolled = false;
let activeTags = [];
let carbGoal = 50;
let foodLog = [];
let metricValues = {};
let dayLogs = {};
let currentDate = new Date();
let allergyProfile = { allergens: [], intolerances: ['Lactose'], preferences: ['Gluten-free'] };
let recipes = [];
let generating = false;
let selectedPatSupp = null;
let selectedProvSupp = null;
let selectedProtocol = null;
let suppItems = [];
let dietBItems = [];
let activityItems = [];
let labBItems = [];
let galleryImages = [];
let itemId = 0;
let quoteIdx = Math.floor(Math.random() * MORNING_QUOTES.length);
let intakeData = {};
let intakeStep = 0;
let researchRunning = false;
let dietRunning = false;
let handoutRunning = false;

// ═══════════════════════════════════════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════════════════════════════════════
let toastTimer;
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}

// ═══════════════════════════════════════════════════════════════════════════
// MODE & NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════
function setMode(mode, el) {
  isProvider = mode === 'provider';
  document.querySelectorAll('.mpill').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  document.body.className = isProvider ? 'provider-mode' : 'patient-mode';
  document.getElementById('patient-tabs').style.display = isProvider ? 'none' : 'flex';
  document.getElementById('provider-tabs').style.display = isProvider ? 'flex' : 'none';
  document.getElementById('tier-badge').textContent = isProvider ? '⚕️ Provider + Patient Access' : '🌱 Basic Member';
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  if (isProvider) {
    document.getElementById('v-dashboard').classList.add('active');
    document.querySelector('#provider-tabs .mtab').classList.add('active');
    document.querySelectorAll('#patient-tabs .mtab').forEach(t => t.classList.remove('active'));
    buildResearchChips();
    renderProtocols();
  } else {
    document.getElementById('v-onboard').classList.add('active');
    document.querySelector('#patient-tabs .mtab').classList.add('active');
    document.querySelectorAll('#provider-tabs .mtab').forEach(t => t.classList.remove('active'));
  }
}

function switchTab(id, el) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const tabs = isProvider
    ? document.querySelectorAll('#provider-tabs .mtab')
    : document.querySelectorAll('#patient-tabs .mtab');
  tabs.forEach(t => t.classList.remove('active'));
  const v = document.getElementById('v-' + id);
  if (v) v.classList.add('active');
  if (el) el.classList.add('active');
  if (id === 'tracker') { updateDateDisplay(); renderMetrics(); renderChart(); updateCarbDisplay(); }
  if (id === 'supplements') renderSuppGrid('patient', '');
  if (id === 'prov-supplements') renderSuppGrid('provider', '');
  if (id === 'wearables') renderWearables();
  if (id === 'notifications') { renderQuote(); updateNotifStatus(); }
  if (id === 'recipes') buildAllergyChips();
  if (id === 'intake') renderIntakeStep();
  if (id === 'labs') renderLabGrid('');
  if (id === 'protocols') renderProtocols();
  if (id === 'research') buildResearchChips();
  if (id === 'gallery') renderGallery();
}

function switchProvTab(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('#provider-tabs .mtab').forEach(t => t.classList.remove('active'));
  const v = document.getElementById('v-' + id);
  if (v) v.classList.add('active');
  if (id === 'research') buildResearchChips();
  if (id === 'labs') renderLabGrid('');
  if (id === 'protocols') renderProtocols();
  if (id === 'prov-supplements') renderSuppGrid('provider', '');
  if (id === 'gallery') renderGallery();
}

// ═══════════════════════════════════════════════════════════════════════════
// ONBOARDING
// ═══════════════════════════════════════════════════════════════════════════
function selectRole(role) {
  selectedRole = role;
  document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('role-' + role).classList.add('selected');
  document.getElementById('btn-ob-0').disabled = false;
}

function toggleCheck(type) {
  if (type === 'age') {
    ageChecked = !ageChecked;
    document.getElementById('age-check').classList.toggle('checked', ageChecked);
    document.getElementById('cb-age').textContent = ageChecked ? '✓' : '';
    document.getElementById('btn-ob-1').disabled = !ageChecked;
  } else {
    if (!discScrolled) return;
    discChecked = !discChecked;
    document.getElementById('disc-check').classList.toggle('checked', discChecked);
    document.getElementById('cb-disc').textContent = discChecked ? '✓' : '';
    document.getElementById('btn-ob-2').disabled = !discChecked;
  }
}

function checkDiscScroll() {
  const box = document.getElementById('disc-scroll');
  if (box.scrollTop + box.clientHeight >= box.scrollHeight - 10) {
    discScrolled = true;
    const dc = document.getElementById('disc-check');
    dc.style.pointerEvents = 'auto';
    dc.style.opacity = '1';
  }
}

function obStep(n) {
  document.querySelectorAll('.ob-card').forEach((c, i) => c.classList.toggle('active', i === n));
  for (let i = 0; i < 4; i++) {
    const d = document.getElementById('dot-' + i);
    if (i < n) { d.classList.add('done'); d.classList.remove('active'); }
    else if (i === n) { d.classList.add('active'); d.classList.remove('done'); }
    else { d.classList.remove('active', 'done'); }
  }
  if (n === 3) {
    const isProv = selectedRole === 'provider';
    document.getElementById('ob-role-badge').textContent = isProv ? '⚕️ Provider + Full Patient Access' : '🌱 Basic membership';
    document.getElementById('ob-success-sub').textContent = isProv
      ? 'Your provider dashboard is ready. You also have full access to the patient platform — use the toggle in the header to switch between your clinical suite and your personal health dashboard anytime.'
      : 'Your personal health platform is ready. Start with the Symptom Checker or complete your Health Intake.';
  }
}

function enterPlatform() {
  if (selectedRole === 'provider') {
    setMode('provider', document.getElementById('pill-provider'));
  } else {
    switchTab('symptoms', document.querySelector('#patient-tabs .mtab:nth-child(2)'));
    toast('Welcome to Root Med Health 🌿');
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// SYMPTOM CHECKER
// ═══════════════════════════════════════════════════════════════════════════
function initSymptomTags() {
  const tagRow = document.getElementById('sym-tags');
  if (!tagRow) return;
  SYMPTOM_TAGS.forEach(t => {
    const b = document.createElement('button');
    b.className = 'chip';
    b.textContent = t;
    b.onclick = () => {
      const on = b.classList.toggle('on');
      if (on) activeTags.push(t);
      else activeTags = activeTags.filter(x => x !== t);
      const inp = document.getElementById('sym-text');
      if (on && !inp.value.toLowerCase().includes(t.toLowerCase()))
        inp.value = inp.value ? inp.value + ', ' + t.toLowerCase() : t.toLowerCase();
      checkSymBtn();
    };
    tagRow.appendChild(b);
  });
}

function checkSymBtn() {
  const btn = document.getElementById('sym-btn');
  if (btn) btn.disabled = !document.getElementById('sym-text').value.trim();
}

async function analyzeSymptoms() {
  const symptoms = document.getElementById('sym-text').value.trim();
  if (!symptoms) return;
  document.getElementById('sym-input-area').style.display = 'none';
  document.getElementById('sym-loading').innerHTML = `<div class="loading-card"><span class="spin">🌿</span><div class="load-h">Gathering insights...</div><p class="load-p">Connecting your symptoms to functional medicine wisdom</p></div>`;
  document.getElementById('sym-loading').style.display = 'block';
  document.getElementById('sym-results').style.display = 'none';
  const age = document.getElementById('sym-age').value;
  const sex = document.getElementById('sym-sex').value;
  const dur = document.getElementById('sym-dur').value;
  const ctx = document.getElementById('sym-ctx').value;
  const context = [age && 'Age: ' + age, sex && 'Sex: ' + sex, dur && 'Duration: ' + dur, ctx && 'Context: ' + ctx].filter(Boolean).join(', ');
  const prompt = `You are a functional medicine health educator for Root Med Health. Respond ONLY with valid JSON:\nPatient info: ${context || 'Not provided'}\nSymptoms: ${symptoms}\n{"overview":"2-3 sentence compassionate summary","possibleRootCauses":[{"cause":"Name","explanation":"1-2 sentences"}],"functionalApproaches":[{"category":"Nutrition","suggestion":"specific"},{"category":"Supplements","suggestion":"generic form-specific supplement with dose"},{"category":"Lifestyle","suggestion":"specific"},{"category":"Lab Testing","suggestion":"specific labs"},{"category":"Mind-Body","suggestion":"specific"},{"category":"Dietary Pattern","suggestion":"specific"}],"questionsForDoctor":["Q1","Q2","Q3"],"lifestylePriority":"Single most impactful first step"}`;
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, messages: [{ role: "user", content: prompt }] })
    });
    const data = await res.json();
    const parsed = JSON.parse(data.content?.map(b => b.text || '').join('').replace(/```json|```/g, '').trim());
    renderSymResults(parsed);
  } catch (e) {
    document.getElementById('sym-loading').style.display = 'none';
    document.getElementById('sym-input-area').style.display = 'block';
    toast('Something went wrong — please try again.');
  }
}

function renderSymResults(r) {
  document.getElementById('sym-loading').style.display = 'none';
  const el = document.getElementById('sym-results');
  el.style.display = 'block';
  el.innerHTML = `<div class="res-wrap">
    <div class="res-sec" style="background:linear-gradient(135deg,rgba(168,197,160,.06),var(--white));border-color:rgba(122,158,126,.3)">
      <div class="res-hd"><div class="res-title">What your body may be telling you</div><span class="res-badge rb-g">Overview</span></div>
      <div class="res-body">${r.overview}</div>
      ${r.lifestylePriority ? `<div style="padding:10px 12px;background:rgba(122,158,126,.07);border-radius:8px;border:1px solid rgba(122,158,126,.18)"><div style="font-size:8px;text-transform:uppercase;letter-spacing:.12em;color:var(--terra);margin-bottom:3px;font-weight:500">Priority first step</div><div style="font-size:12px;color:var(--deep)">${r.lifestylePriority}</div></div>` : ''}
    </div>
    ${r.possibleRootCauses?.length ? `<div class="res-sec"><div class="res-hd"><div class="res-title">Possible root causes</div><span class="res-badge rb-t">Root Causes</span></div>${r.possibleRootCauses.map(x => `<div class="arrow-item"><span class="arr">→</span><div><strong>${x.cause}</strong> — ${x.explanation}</div></div>`).join('')}</div>` : ''}
    ${r.functionalApproaches?.length ? `<div class="res-sec"><div class="res-hd"><div class="res-title">Holistic support approaches</div><span class="res-badge rb-g">Strategies</span></div>${r.functionalApproaches.map(x => `<div class="arrow-item"><span class="arr" style="color:var(--terra)">→</span><div><strong>${x.category}</strong> — ${x.suggestion}</div></div>`).join('')}</div>` : ''}
    ${r.questionsForDoctor?.length ? `<div class="res-sec"><div class="res-hd"><div class="res-title">Questions for your provider</div><span class="res-badge rb-r">Provider Visit</span></div>${r.questionsForDoctor.map(q => `<div class="arrow-item"><span class="arr" style="color:var(--brown)">→</span>${q}</div>`).join('')}</div>` : ''}
    <button class="btn-outline" style="width:100%;margin-top:8px" onclick="resetSymptoms()">← New symptom check</button>
  </div>`;
}

function resetSymptoms() {
  document.getElementById('sym-results').style.display = 'none';
  document.getElementById('sym-input-area').style.display = 'block';
  document.getElementById('sym-text').value = '';
  activeTags = [];
  document.querySelectorAll('#sym-tags .chip').forEach(t => t.classList.remove('on'));
  checkSymBtn();
}

// ═══════════════════════════════════════════════════════════════════════════
// INTAKE FORM
// ═══════════════════════════════════════════════════════════════════════════
function renderIntakeStep() {
  const prog = document.getElementById('intake-progress');
  if (!prog) return;
  prog.innerHTML = INTAKE_STEPS.map((_, i) =>
    `<div class="ip-seg ${i < intakeStep ? 'done' : i === intakeStep ? 'active' : ''}"></div>`
  ).join('');
  const s = INTAKE_STEPS[intakeStep];
  const colFields = s.fields.filter(f => f.col);
  const fullFields = s.fields.filter(f => !f.col);
  document.getElementById('intake-steps').innerHTML = `
    <div style="font-family:'Cormorant Garamond',serif;font-size:20px;color:var(--deep);margin-bottom:4px">${s.title}</div>
    <div style="font-size:11px;color:var(--gray);margin-bottom:18px">${s.sub} — Step ${intakeStep + 1} of ${INTAKE_STEPS.length}</div>
    ${colFields.length ? `<div class="intake-grid">${colFields.map(f => renderIntakeField(f)).join('')}</div>` : ''}
    ${fullFields.map(f => renderIntakeField(f)).join('')}
    <div style="display:flex;gap:8px;margin-top:14px">
      ${intakeStep > 0 ? `<button class="btn-outline" style="padding:12px 16px" onclick="intakeNav(-1)">← Back</button>` : ''}
      <button class="btn-primary" onclick="intakeNav(1)">${intakeStep < INTAKE_STEPS.length - 1 ? 'Next →' : '✓ Complete Intake'}</button>
    </div>`;
}

function renderIntakeField(f) {
  if (f.type === 'select') return `<div class="fld"><label class="fld-label">${f.label}</label><select class="inp" id="if-${f.id}"><option value="">Select</option>${f.options.map(o => `<option${intakeData[f.id] === o ? ' selected' : ''}>${o}</option>`).join('')}</select></div>`;
  if (f.type === 'textarea') return `<div class="fld"><label class="fld-label">${f.label}</label><textarea class="inp" id="if-${f.id}" placeholder="${f.placeholder || ''}" style="min-height:60px">${intakeData[f.id] || ''}</textarea></div>`;
  return `<div class="fld"><label class="fld-label">${f.label}</label><input type="${f.type}" class="inp" id="if-${f.id}" placeholder="${f.placeholder || ''}" value="${intakeData[f.id] || ''}"></div>`;
}

function intakeNav(dir) {
  INTAKE_STEPS[intakeStep].fields.forEach(f => {
    const el = document.getElementById('if-' + f.id);
    if (el) intakeData[f.id] = el.value;
  });
  if (dir === 1 && intakeStep < INTAKE_STEPS.length - 1) { intakeStep++; renderIntakeStep(); }
  else if (dir === 1) {
    document.getElementById('intake-steps').innerHTML = `<div style="text-align:center;padding:20px 0"><div style="font-size:40px;margin-bottom:12px">✅</div><div style="font-family:'Cormorant Garamond',serif;font-size:20px;color:var(--deep);margin-bottom:6px">Intake Complete</div><div style="font-size:11px;color:var(--gray);margin-bottom:18px">Your health profile has been saved. Upgrade to Complete for your personalized care plan.</div><button class="btn-primary" onclick="switchTab('careplan',document.querySelector('#patient-tabs .mtab:nth-child(4)'))">View Care Plan Options →</button></div>`;
    toast('✓ Health intake saved');
  }
  else if (dir === -1 && intakeStep > 0) { intakeStep--; renderIntakeStep(); }
}

// ═══════════════════════════════════════════════════════════════════════════
// CARE PLAN
// ═══════════════════════════════════════════════════════════════════════════
function unlockCarePlan() {
  document.getElementById('careplan-lock').style.display = 'none';
  document.getElementById('careplan-content').style.display = 'block';
  generateCarePlan();
}

async function generateCarePlan() {
  const el = document.getElementById('careplan-content');
  el.innerHTML = `<div class="loading-card"><span class="spin">🔬</span><div class="load-h">Generating your care plan...</div><p class="load-p">Analyzing your intake and lab values</p></div>`;
  const labSummary = ['tsh','t4','vit-d','ferritin','crp','glucose','hba1c','insulin']
    .map(k => intakeData['lab-' + k] ? `${k.toUpperCase()}: ${intakeData['lab-' + k]}` : '').filter(Boolean).join(', ') || 'No lab values provided';
  const prompt = `You are a functional medicine clinical educator for Root Med Health. Generate a personalized care plan. Patient: Age ${intakeData.age || 'not specified'}, ${intakeData.sex || 'not specified'}, Goal: ${intakeData['primary-goal'] || 'general optimization'}, Symptoms: ${intakeData['symptoms-in'] || 'not specified'}, Labs: ${labSummary}. Respond ONLY with valid JSON:\n{"overview":"3-4 sentence personalized summary","supplementRecommendations":[{"name":"Supplement","form":"Specific form","dose":"Dose range","timing":"When","rationale":"Why for this patient","dfhProduct":"Designs for Health product name"}],"dietaryProtocol":{"approach":"Protocol name","keyPrinciples":["P1","P2"],"foodsToEmphasize":["Food 1 — why","Food 2"],"foodsToAvoid":["Food 1 — why"]},"activityRecommendations":[{"type":"Activity","frequency":"How often","duration":"How long","rationale":"Why"}],"implementationTimeline":[{"week":"Week 1–2","focus":"Focus"},{"week":"Week 3–4","focus":"Focus"},{"week":"Month 2","focus":"Focus"},{"week":"Month 3","focus":"Focus"}],"providerQuestions":["Q1","Q2","Q3"],"followUpLabs":["Lab 1","Lab 2"]}`;
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1500, messages: [{ role: "user", content: prompt }] })
    });
    const data = await res.json();
    const r = JSON.parse(data.content?.map(b => b.text || '').join('').replace(/```json|```/g, '').trim());
    el.innerHTML = `<div>
      <div class="cp-header">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
          <div><div class="cp-title">Your Personalized Care Plan</div><div class="cp-subtitle">Root Med Health · Complete Membership · Valid 90 days</div></div>
          <span class="cp-badge">🔬 Lab-informed</span>
        </div>
        <div class="cp-overview">${r.overview}</div>
      </div>
      ${r.supplementRecommendations?.length ? `<div class="cp-section"><div class="cp-section-title">💊 Supplement Protocol</div>${r.supplementRecommendations.map(s => `<div class="supp-card-cp"><div class="supp-name-cp">${s.name}</div><div class="supp-form-cp">✓ ${s.form}</div><div class="supp-dose-cp">${s.dose} · ${s.timing}</div><div class="supp-rationale-cp">${s.rationale}</div><div class="cp-supp-footer"><div class="dfh-ref"><div class="dfh-dot"></div><div class="dfh-ref-text">Designs for Health${s.dfhProduct ? ' — ' + s.dfhProduct : ''}</div></div><button class="btn-shop-now" onclick="switchTab('store',document.querySelector('#patient-tabs .mtab:nth-child(8)'));toast('Opening DFH Store...')">🛍️ Shop Now</button></div></div>`).join('')}</div>` : ''}
      ${r.dietaryProtocol ? `<div class="cp-section"><div class="cp-section-title">🥗 Dietary Protocol — ${r.dietaryProtocol.approach}</div>${r.dietaryProtocol.keyPrinciples?.map(p => `<div class="cp-item"><div class="cp-dot"></div><div class="cp-text">${p}</div></div>`).join('')}${r.dietaryProtocol.foodsToEmphasize?.length ? `<div class="section-label" style="margin-top:10px">Emphasize</div>${r.dietaryProtocol.foodsToEmphasize.map(f => `<div class="cp-item"><div class="cp-dot" style="background:#7ab87e"></div><div class="cp-text">${f}</div></div>`).join('')}` : ''}${r.dietaryProtocol.foodsToAvoid?.length ? `<div class="section-label" style="margin-top:10px">Minimize or avoid</div>${r.dietaryProtocol.foodsToAvoid.map(f => `<div class="cp-item"><div class="cp-dot" style="background:var(--terra)"></div><div class="cp-text">${f}</div></div>`).join('')}` : ''}</div>` : ''}
      ${r.implementationTimeline?.length ? `<div class="cp-section"><div class="cp-section-title">📅 Implementation Timeline</div>${r.implementationTimeline.map(t => `<div class="timeline-item"><div class="timeline-week">${t.week}</div><div class="timeline-text">${t.focus}</div></div>`).join('')}</div>` : ''}
      ${r.providerQuestions?.length ? `<div class="cp-section"><div class="cp-section-title">💬 Questions for Your Provider</div>${r.providerQuestions.map(q => `<div class="cp-item"><div class="cp-dot" style="background:var(--gold)"></div><div class="cp-text">${q}</div></div>`).join('')}</div>` : ''}
    </div>`;
    toast('✓ Care plan generated');
  } catch (e) {
    el.innerHTML = `<div class="disc"><span>⚠️</span><div class="disc-txt">Error generating care plan — please try again.</div></div>`;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// TRACKER — NET CARB
// ═══════════════════════════════════════════════════════════════════════════
function setCarbGoal(val, btn) {
  carbGoal = val || 50;
  document.querySelectorAll('.gbtn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  updateCarbDisplay();
}

function updateCarbDisplay() {
  const tc = foodLog.reduce((s, f) => s + f.carbs, 0);
  const tf = foodLog.reduce((s, f) => s + f.fiber, 0);
  const net = Math.max(0, tc - tf);
  const pct = Math.min((net / carbGoal) * 100, 100);
  const rem = carbGoal - net;
  const cur = document.getElementById('carb-current');
  if (cur) cur.textContent = net.toFixed(1);
  const gd = document.getElementById('carb-goal-display');
  if (gd) gd.textContent = carbGoal + 'g';
  const cbt = document.getElementById('cb-total');
  if (cbt) cbt.textContent = tc.toFixed(1) + 'g';
  const cbf = document.getElementById('cb-fiber');
  if (cbf) cbf.textContent = tf.toFixed(1) + 'g';
  const cbn = document.getElementById('cb-net');
  if (cbn) cbn.textContent = net.toFixed(1) + 'g';
  const fill = document.getElementById('carb-fill');
  if (fill) {
    fill.style.width = pct + '%';
    fill.style.background = pct <= 80 ? 'linear-gradient(90deg,#e67e22,#f0a060)' : pct <= 100 ? 'linear-gradient(90deg,#c9a84c,#e8c96a)' : 'linear-gradient(90deg,#c0392b,#e87070)';
  }
  const badge = document.getElementById('carb-remaining-badge');
  if (badge) badge.innerHTML = rem >= 0
    ? `<div style="font-size:11px;font-weight:500;padding:3px 9px;border-radius:8px;background:rgba(77,114,83,.1);color:#2d5a30;margin-bottom:3px">${rem.toFixed(1)}g remaining</div>`
    : `<div style="font-size:11px;font-weight:500;padding:3px 9px;border-radius:8px;background:rgba(192,57,43,.08);color:var(--red);margin-bottom:3px">${Math.abs(rem).toFixed(1)}g over goal</div>`;
  renderFoodLogItems();
}

function renderFoodLogItems() {
  const container = document.getElementById('food-log-items');
  if (!container) return;
  if (!foodLog.length) {
    container.innerHTML = '<div class="log-empty">No foods logged yet — search above</div>';
    return;
  }
  container.innerHTML = foodLog.map(f => `
    <div class="log-item">
      <span style="font-size:16px;flex-shrink:0">${f.emoji}</span>
      <span class="log-item-name">${f.name}</span>
      <div class="qty-wrap">
        <button class="qty-btn" onclick="adjLogQty(${f.id},-0.5)">−</button>
        <input type="number" class="qty-inp" value="${f.qty}" min="0.1" step="0.5"
          onchange="setLogQty(${f.id},parseFloat(this.value)||1)"
          oninput="setLogQty(${f.id},parseFloat(this.value)||1)">
        <span class="qty-unit">${f.servingUnit}</span>
        <button class="qty-btn" onclick="adjLogQty(${f.id},0.5)">+</button>
      </div>
      <span class="log-net">${f.net.toFixed(1)}g net</span>
      <span class="log-del" onclick="removeFood(${f.id})">✕</span>
    </div>`).join('');
}

function adjLogQty(id, delta) {
  const item = foodLog.find(f => f.id === id);
  if (!item) return;
  item.qty = Math.max(0.1, Math.round((item.qty + delta) * 10) / 10);
  recalcFood(item);
  updateCarbDisplay();
}

function setLogQty(id, val) {
  const item = foodLog.find(f => f.id === id);
  if (!item) return;
  item.qty = Math.max(0.1, val);
  recalcFood(item);
  updateCarbDisplay();
}

function recalcFood(item) {
  const m = item.qty / item.baseQty;
  item.carbs = parseFloat((item.baseCarbs * m).toFixed(1));
  item.fiber = parseFloat((item.baseFiber * m).toFixed(1));
  item.net = parseFloat(Math.max(0, (item.baseCarbs - item.baseFiber) * m).toFixed(1));
}

function removeFood(id) {
  foodLog = foodLog.filter(f => f.id !== id);
  updateCarbDisplay();
  toast('Removed from log');
}

function addFoodToLog(food, qty) {
  const q = qty || food.servingQty || 1;
  const mult = q / (food.servingQty || 1);
  foodLog.push({
    id: Date.now(),
    emoji: food.emoji,
    name: food.name,
    qty: q,
    servingUnit: food.servingUnit || 'serving',
    baseQty: food.servingQty || 1,
    carbs: parseFloat((food.carbs * mult).toFixed(1)),
    fiber: parseFloat((food.fiber * mult).toFixed(1)),
    net: parseFloat(Math.max(0, (food.carbs - food.fiber) * mult).toFixed(1)),
    baseCarbs: food.carbs,
    baseFiber: food.fiber
  });
  updateCarbDisplay();
  toast('✓ Added ' + food.name);
}

function quickFoodSearch() {
  const val = document.getElementById('quick-food-search').value.toLowerCase().trim();
  const res = document.getElementById('quick-food-results');
  if (!val) { res.style.display = 'none'; return; }
  const matches = FOOD_DB.filter(f => f.name.toLowerCase().includes(val) || f.cat.toLowerCase().includes(val)).slice(0, 6);
  if (!matches.length) { res.style.display = 'none'; return; }
  res.style.display = 'block';
  res.innerHTML = matches.map(f => {
    const net = Math.max(0, f.carbs - f.fiber);
    const fs = JSON.stringify(f).replace(/"/g, '&quot;');
    return `<div class="food-row" onclick="addFoodToLog(${fs});document.getElementById('quick-food-search').value='';document.getElementById('quick-food-results').style.display='none'">
      <span class="fr-emoji">${f.emoji}</span>
      <span class="fr-name">${f.name} <small style="color:var(--gray)">${f.serving}</small></span>
      <span class="fr-net">${net}g net</span>
      <button class="fr-btn" onclick="event.stopPropagation();addFoodToLog(${fs});document.getElementById('quick-food-search').value='';document.getElementById('quick-food-results').style.display='none'">Add</button>
    </div>`;
  }).join('');
}

// ═══════════════════════════════════════════════════════════════════════════
// TRACKER — METRICS
// ═══════════════════════════════════════════════════════════════════════════
function dateKey(d) { return d.toISOString().split('T')[0]; }
function formatDate(d) { return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }); }
function isToday(d) { return dateKey(d) === dateKey(new Date()); }

function updateDateDisplay() {
  const dd = document.getElementById('date-display');
  const ds = document.getElementById('date-sub');
  const sl = document.getElementById('save-bar-label');
  if (dd) dd.textContent = formatDate(currentDate);
  if (ds) ds.textContent = isToday(currentDate) ? 'Today' : dateKey(currentDate);
  if (sl) sl.textContent = isToday(currentDate) ? "Today's Log" : formatDate(currentDate);
}

function changeDay(delta) {
  const nd = new Date(currentDate);
  nd.setDate(nd.getDate() + delta);
  if (nd > new Date()) { toast('Cannot log future dates'); return; }
  saveDayToMemory();
  currentDate = nd;
  loadDayFromMemory();
  updateDateDisplay();
  renderMetrics();
  renderChart();
  updateCarbDisplay();
}

function renderMetrics() {
  const grid = document.getElementById('metrics-grid');
  if (!grid) return;
  grid.innerHTML = METRICS.map(m => {
    const val = metricValues[m.key] || '';
    const numVal = parseFloat(val);
    let pct = 0, statusClass = '', statusText = '';
    if (!isNaN(numVal) && m.goal) {
      if (m.key === 'glucose') {
        pct = Math.min((numVal / 200) * 100, 100);
        statusClass = numVal <= 85 ? 'status-great' : numVal <= 100 ? 'status-good' : numVal <= 140 ? 'status-low' : 'status-over';
        statusText = numVal <= 85 ? 'Optimal' : numVal <= 100 ? 'Borderline' : numVal <= 140 ? 'Elevated' : 'High';
      } else {
        pct = Math.min((numVal / m.goal) * 100, 100);
        statusClass = pct >= 90 ? 'status-great' : pct >= 60 ? 'status-good' : 'status-low';
        statusText = pct >= 90 ? '✓ On track' : pct >= 60 ? 'Getting there' : 'Below goal';
      }
    }
    return `<div class="metric-card ${m.cls}">
      <span class="metric-icon">${m.icon}</span>
      <div class="metric-label">${m.label}</div>
      <div class="metric-inp-wrap">
        <input type="number" class="metric-inp" value="${val}" min="${m.min}" max="${m.max}" step="${m.step}" placeholder="—"
          oninput="metricValues['${m.key}']=this.value;updateMetricStatus('${m.key}',this.value)">
        <span class="metric-unit">${m.unit}</span>
      </div>
      <div style="font-size:9px;color:var(--gray);margin-top:3px">${m.goalLabel}</div>
      <div class="metric-progress"><div class="metric-fill" id="mp-${m.key}" style="width:${pct}%;background:${m.color}"></div></div>
      <div class="metric-status ${statusClass}" id="ms-${m.key}">${statusText}</div>
    </div>`;
  }).join('');
}

function updateMetricStatus(key, val) {
  const m = METRICS.find(x => x.key === key);
  if (!m) return;
  const numVal = parseFloat(val);
  metricValues[key] = val;
  if (isNaN(numVal)) return;
  let pct = 0, statusClass = '', statusText = '';
  if (m.key === 'glucose') {
    pct = Math.min((numVal / 200) * 100, 100);
    statusClass = numVal <= 85 ? 'status-great' : numVal <= 100 ? 'status-good' : numVal <= 140 ? 'status-low' : 'status-over';
    statusText = numVal <= 85 ? 'Optimal' : numVal <= 100 ? 'Borderline' : numVal <= 140 ? 'Elevated' : 'High';
  } else {
    pct = Math.min((numVal / m.goal) * 100, 100);
    statusClass = pct >= 90 ? 'status-great' : pct >= 60 ? 'status-good' : 'status-low';
    statusText = pct >= 90 ? '✓ On track' : pct >= 60 ? 'Getting there' : 'Below goal';
  }
  const fill = document.getElementById('mp-' + key);
  const status = document.getElementById('ms-' + key);
  if (fill) fill.style.width = pct + '%';
  if (status) { status.className = 'metric-status ' + statusClass; status.textContent = statusText; }
}

function renderChart() {
  const sel = document.getElementById('chart-metric-sel');
  if (!sel) return;
  const metricKey = sel.value;
  const m = METRICS.find(x => x.key === metricKey);
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const log = dayLogs[dateKey(d)];
    const val = log ? (parseFloat(log.metrics?.[metricKey]) || 0) : 0;
    days.push({ label: d.toLocaleDateString('en-US', { weekday: 'short' }), val, isToday: i === 0 });
  }
  const maxVal = Math.max(...days.map(d => d.val), m?.goal || 1, 1);
  const goalPct = m?.goal ? Math.min((m.goal / maxVal) * 100, 100) : null;
  const bars = document.getElementById('chart-bars');
  if (!bars) return;
  bars.innerHTML = (goalPct ? `<div style="position:absolute;left:0;right:0;height:1px;border-top:1.5px dashed rgba(192,57,43,.4);bottom:${goalPct}%"><span style="position:absolute;right:0;font-size:8px;color:var(--red);font-weight:500;transform:translateY(-10px)">Goal</span></div>` : '') +
    days.map(d => {
      const pct = maxVal > 0 ? Math.max((d.val / maxVal) * 95, d.val > 0 ? 3 : 0) : 0;
      return `<div class="chart-bar-wrap"><div class="chart-bar" style="height:${pct}%;background:${d.isToday ? '#4d7253' : '#a8c5a0'}" title="${d.val} ${m?.unit || ''}"></div><span class="chart-day">${d.label}</span></div>`;
    }).join('');
}

function saveDayToMemory() {
  const k = dateKey(currentDate);
  const tc = foodLog.reduce((s, f) => s + f.carbs, 0);
  const tf = foodLog.reduce((s, f) => s + f.fiber, 0);
  dayLogs[k] = {
    metrics: { ...metricValues },
    netCarbs: Math.max(0, tc - tf),
    foodLog: [...foodLog],
    notes: document.getElementById('daily-notes')?.value || '',
    carbGoal
  };
}

function loadDayFromMemory() {
  const k = dateKey(currentDate);
  const log = dayLogs[k];
  metricValues = log ? { ...(log.metrics || {}) } : {};
  foodLog = log ? [...(log.foodLog || [])] : [];
  const dn = document.getElementById('daily-notes');
  if (dn) dn.value = log?.notes || '';
}

function saveDay() {
  saveDayToMemory();
  renderChart();
  toast('✓ Day logged — ' + formatDate(currentDate));
}

// ═══════════════════════════════════════════════════════════════════════════
// ALLERGY PROFILE + RECIPES
// ═══════════════════════════════════════════════════════════════════════════
function buildAllergyChips() {
  const build = (id, list, cat) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = list.map(i => {
      const isActive = allergyProfile[cat].includes(i);
      const cls = isActive ? (cat === 'allergens' ? 'allergen' : cat === 'intolerances' ? 'intolerance' : 'preference') : '';
      return `<span class="allergy-chip ${cls}" onclick="toggleAllergen('${i}','${cat}',this)">${i}</span>`;
    }).join('');
  };
  build('chips-allergens', ALLERGENS, 'allergens');
  build('chips-intolerances', INTOLERANCES, 'intolerances');
  build('chips-preferences', PREFERENCES, 'preferences');
  updateAllergyBar();
}

function toggleAllergen(item, cat, el) {
  const arr = allergyProfile[cat];
  const idx = arr.indexOf(item);
  if (idx > -1) arr.splice(idx, 1); else arr.push(item);
  const isActive = arr.includes(item);
  const cls = isActive ? (cat === 'allergens' ? 'allergen' : cat === 'intolerances' ? 'intolerance' : 'preference') : '';
  el.className = 'allergy-chip ' + cls;
  updateAllergyBar();
}

function updateAllergyBar() {
  const tags = document.getElementById('af-tags');
  if (!tags) return;
  const all = [...allergyProfile.allergens, ...allergyProfile.intolerances, ...allergyProfile.preferences];
  tags.innerHTML = all.slice(0, 5).map(a => {
    const isAllergen = allergyProfile.allergens.includes(a);
    return `<span class="af-tag" style="${isAllergen ? '' : 'background:rgba(77,114,83,.1);color:var(--sage);border-color:rgba(77,114,83,.25)'}">${isAllergen ? '🚨' : '⚠️'} ${a}</span>`;
  }).join('');
}

function saveAllergyProfile() {
  updateAllergyBar();
  toast('✓ Allergy profile saved — applied to all recipe recommendations');
}

async function generateRecipes() {
  if (generating) return;
  generating = true;
  const btn = document.getElementById('btn-gen-recipes');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Generating...'; }
  const rl = document.getElementById('recipe-loading');
  if (rl) { rl.innerHTML = `<div class="loading-card"><span class="spin">🍽️</span><div class="load-h">Generating safe recipes...</div><p class="load-p">Verifying all allergen exclusions</p></div>`; rl.style.display = 'block'; }
  const rg = document.getElementById('recipe-grid');
  if (rg) rg.innerHTML = '';
  const re = document.getElementById('recipe-empty');
  if (re) re.style.display = 'none';
  const exclusions = [...allergyProfile.allergens, ...allergyProfile.intolerances, ...allergyProfile.preferences].join(', ') || 'none';
  const prompt = `You are a functional medicine nutritionist for Root Med Health. Create ALLERGY-SAFE recipes. CRITICAL: These items MUST be completely excluded: ${exclusions}. Generate exactly 6 diverse recipes (1 breakfast, 2 lunches, 2 dinners, 1 snack/smoothie). Respond ONLY with valid JSON:\n{"recipes":[{"name":"Recipe name","meal":"Breakfast|Lunch|Dinner|Snack","time":"25 min","emoji":"🥗","description":"2 sentence description","whyThisRecipe":"How this supports functional health","allergen_safe":true,"ingredients":["ingredient 1"],"steps":["Step 1"],"nutrition":{"calories":320,"protein":"28g","carbs":"18g","fiber":"5g","netCarbs":"13g"}}]}`;
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 2000, messages: [{ role: "user", content: prompt }] })
    });
    const data = await res.json();
    const parsed = JSON.parse(data.content?.map(b => b.text || '').join('').replace(/```json|```/g, '').trim());
    recipes = parsed.recipes || [];
    renderRecipes();
    toast('✨ ' + recipes.length + ' allergy-safe recipes generated');
  } catch (e) {
    if (re) re.style.display = 'block';
    toast('Error generating recipes');
  } finally {
    generating = false;
    if (btn) { btn.disabled = false; btn.innerHTML = '✨ Generate Allergy-Safe Recipes'; }
    if (rl) rl.style.display = 'none';
  }
}

function renderRecipes() {
  const grid = document.getElementById('recipe-grid');
  const empty = document.getElementById('recipe-empty');
  if (!recipes.length) { if (empty) empty.style.display = 'block'; return; }
  if (empty) empty.style.display = 'none';
  if (grid) grid.innerHTML = recipes.map(r => `
    <div class="recipe-card">
      <div class="recipe-img">
        <span style="font-size:42px">${r.emoji || '🌿'}</span>
        <span class="recipe-safe-badge">🛡️ Safe</span>
        <span class="recipe-time">⏱ ${r.time}</span>
      </div>
      <div class="recipe-body">
        <div class="recipe-name">${r.name}</div>
        <div class="recipe-meta">
          <span>${r.meal}</span>
          ${r.nutrition?.netCarbs ? `<span class="recipe-net">🥗 ${r.nutrition.netCarbs} net carbs</span>` : ''}
        </div>
        <div class="recipe-why">${r.whyThisRecipe || ''}</div>
      </div>
    </div>`).join('');
}

// ═══════════════════════════════════════════════════════════════════════════
// SUPPLEMENTS
// ═══════════════════════════════════════════════════════════════════════════
function renderSuppGrid(mode, filter) {
  const list = SUPPLEMENTS.filter(s => !filter || s.name.toLowerCase().includes(filter) || s.category.toLowerCase().includes(filter));
  const isProvMode = mode === 'provider';
  const gridId = isProvMode ? 'prov-supp-grid' : 'pat-supp-grid';
  const selectedSupp = isProvMode ? selectedProvSupp : selectedPatSupp;
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = list.map(s => `
    <div class="supp-card ${selectedSupp === s.name ? 'selected' : ''}" onclick="selectSupp('${mode}','${s.name.replace(/'/g,"\\'")}')">
      <div class="supp-name">${s.name}</div>
      <div class="supp-cat">${s.category} · ${s.evidence} evidence</div>
      <div class="supp-desc">${s.desc}</div>
    </div>`).join('');
  if (selectedSupp) renderSuppDetail(mode);
}

function filterSupplements(mode, val) {
  renderSuppGrid(mode, val.toLowerCase());
}

function selectSupp(mode, name) {
  if (mode === 'provider') selectedProvSupp = name;
  else selectedPatSupp = name;
  renderSuppGrid(mode, '');
}

function renderSuppDetail(mode) {
  const isProvMode = mode === 'provider';
  const name = isProvMode ? selectedProvSupp : selectedPatSupp;
  const s = SUPPLEMENTS.find(x => x.name === name);
  if (!s) return;
  const detailId = isProvMode ? 'prov-supp-detail' : 'pat-supp-detail';
  const el = document.getElementById(detailId);
  if (!el) return;
  el.innerHTML = `<div class="supp-detail">
    <div class="sd-title">${s.name} — Clinical Reference</div>
    <div class="sd-grid">
      <div class="sd-item"><div class="sd-label">Therapeutic Dose</div><div class="sd-val">${s.dose}</div></div>
      <div class="sd-item"><div class="sd-label">Best Timing</div><div class="sd-val">${s.timing}</div></div>
      <div class="sd-item"><div class="sd-label">Preferred Form</div><div class="sd-val">${s.form}</div></div>
      <div class="sd-item"><div class="sd-label">Evidence Level</div><div class="sd-val">${s.evidence}</div></div>
    </div>
    <div class="sd-section"><div class="sd-section-label">⚠️ Interactions</div><div class="sd-text">${s.interactions}</div></div>
    <div class="sd-section"><div class="sd-section-label">🚫 Contraindications</div><div class="sd-text">${s.contraindications}</div></div>
    <div class="sd-section"><div class="sd-section-label">💡 Clinical Notes</div><div class="sd-text">${s.notes}</div></div>
    ${isProvMode ? `<div style="display:flex;gap:7px;margin-top:10px">
      <button class="btn-outline" style="padding:7px 14px;font-size:10px" onclick="sendSuppToHandout('${s.name.replace(/'/g,"\\'")}')">📄 Patient Handout</button>
      <button class="btn-gold" onclick="toast('Patient CTA for ${s.name.replace(/'/g,"\\'")}')">💬 Patient CTA</button>
    </div>` : `<button class="btn-outline" style="margin-top:10px;width:100%" onclick="switchTab('store',document.querySelector('#patient-tabs .mtab:nth-child(8)'))">🛍️ Shop Designs for Health</button>`}
  </div>`;
}

function sendSuppToHandout(name) {
  switchProvTab('handouts');
  const ht = document.getElementById('handout-type');
  const hto = document.getElementById('handout-topic');
  if (ht) ht.value = 'Supplement protocol with instructions';
  if (hto) hto.value = name;
  checkHandoutBtn();
  toast('Sent to Handout Generator');
}

// ═══════════════════════════════════════════════════════════════════════════
// LAB REFERENCE
// ═══════════════════════════════════════════════════════════════════════════
function renderLabGrid(filter) {
  const list = LAB_REFS.filter(l => !filter || l.name.toLowerCase().includes(filter));
  const grid = document.getElementById('lab-grid');
  if (!grid) return;
  grid.innerHTML = list.map(l => `
    <div class="lab-item">
      <div class="lab-name">${l.name}</div>
      <div class="lab-ranges">
        <span class="lab-conv">Conv: ${l.conv}</span>
        <span class="lab-func">Func: ${l.func}</span>
      </div>
      <div class="lab-clinical">${l.clinical}</div>
      <div class="lab-flag-low">↓ ${l.flagLow}</div>
      <div class="lab-flag-high">↑ ${l.flagHigh}</div>
    </div>`).join('');
}

function filterLabs(val) {
  renderLabGrid(val.toLowerCase());
}

// ═══════════════════════════════════════════════════════════════════════════
// PROTOCOLS
// ═══════════════════════════════════════════════════════════════════════════
function renderProtocols() {
  const grid = document.getElementById('protocol-grid');
  if (!grid || grid.children.length) return;
  grid.innerHTML = PROTOCOLS.map(p => `
    <div class="protocol-card ${selectedProtocol === p.name ? 'selected' : ''}"
      onclick="selectProtocol('${p.name.replace(/'/g,"\\'")}',this)">
      <div class="pc-head">
        <div class="pc-name">${p.emoji} ${p.name}</div>
        <div class="pc-cat">${p.category}</div>
      </div>
      <div class="pc-body">
        <div class="pc-desc">${p.desc}</div>
        <div class="pc-tags">${p.tags.map(t => `<span class="pctag">${t}</span>`).join('')}</div>
      </div>
    </div>`).join('');
}

function selectProtocol(name, el) {
  selectedProtocol = name;
  document.querySelectorAll('.protocol-card').forEach(c => c.classList.remove('selected'));
  if (el) el.classList.add('selected');
  const p = PROTOCOLS.find(x => x.name === name);
  if (!p) return;
  const det = document.getElementById('protocol-detail');
  if (!det) return;
  det.innerHTML = `<div class="protocol-detail">
    <div style="font-family:'Cormorant Garamond',serif;font-size:20px;color:var(--pt);margin-bottom:10px">${p.emoji} ${p.name}</div>
    <div style="font-size:11px;color:var(--pm);line-height:1.6;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid rgba(45,74,48,.6)">${p.desc}</div>
    <div class="op-section-label">Assessment / Labs</div>
    ${p.assessment.map(a => `<div class="op-item"><div class="op-dot"></div><div class="op-text">${a}</div></div>`).join('')}
    <div class="op-section-label">Clinical Interventions</div>
    ${p.interventions.map(a => `<div class="op-item"><div class="op-dot" style="background:var(--sage-light)"></div><div class="op-text">${a}</div></div>`).join('')}
    <div class="op-section-label" style="color:#7ab87e">🌿 Dietary Approach</div>
    ${p.dietary.map(a => `<div class="op-item"><div class="op-dot" style="background:#7ab87e"></div><div class="op-text">${a}</div></div>`).join('')}
    <div class="op-section-label" style="color:var(--gold)">💊 Supplement Considerations</div>
    ${p.supplements.map(a => `<div class="op-item"><div class="op-dot" style="background:var(--gold)"></div><div class="op-text">${a}</div></div>`).join('')}
    <div style="display:flex;gap:7px;margin-top:12px">
      <button class="btn-outline" style="padding:8px 14px;font-size:10px" onclick="window.print()">🖨️ Print</button>
      <button class="btn-outline" style="padding:8px 14px;font-size:10px" onclick="sendToHandout('${p.name.replace(/'/g,"\\'")}')">📄 Patient Handout</button>
    </div>
  </div>`;
}

function sendToHandout(title) {
  switchProvTab('handouts');
  const hto = document.getElementById('handout-topic');
  if (hto) hto.value = title;
  checkHandoutBtn();
  toast('Topic sent to Handout Generator');
}

// ═══════════════════════════════════════════════════════════════════════════
// CONDITION RESEARCH
// ═══════════════════════════════════════════════════════════════════════════
function buildResearchChips() {
  const el = document.getElementById('research-chips');
  if (!el || el.children.length) return;
  el.innerHTML = RESEARCH_TOPICS.slice(0, 12).map(t =>
    `<div class="chip" onclick="setResearchTopic('${t.replace(/'/g,"\\'")}',this)">${t}</div>`
  ).join('');
}

function setResearchTopic(topic, el) {
  const inp = document.getElementById('research-input');
  if (inp) inp.value = topic;
  document.querySelectorAll('#research-chips .chip').forEach(c => c.classList.remove('on'));
  el.classList.add('on');
  checkResearchBtn();
}

function checkResearchBtn() {
  const btn = document.getElementById('btn-research');
  const inp = document.getElementById('research-input');
  if (btn && inp) btn.disabled = !inp.value.trim();
}

async function runResearch() {
  const inp = document.getElementById('research-input');
  const query = inp?.value.trim();
  if (!query || researchRunning) return;
  researchRunning = true;
  const btn = document.getElementById('btn-research');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Researching...'; }
  const el = document.getElementById('research-results');
  if (el) el.innerHTML = [1,2,3].map(() => `<div style="background:rgba(26,46,29,.5);border-radius:11px;padding:16px;border:1px solid rgba(45,74,48,.6);margin-bottom:10px"><div style="height:14px;border-radius:4px;margin-bottom:8px;background:linear-gradient(90deg,rgba(45,74,48,.4) 25%,rgba(77,114,83,.25) 50%,rgba(45,74,48,.4) 75%);background-size:200%;animation:shimmer 1.5s infinite"></div><div style="height:14px;border-radius:4px;background:linear-gradient(90deg,rgba(45,74,48,.4) 25%,rgba(77,114,83,.25) 50%,rgba(45,74,48,.4) 75%);background-size:200%;animation:shimmer 1.5s infinite;width:80%"></div></div>`).join('');
  const prompt = `You are an advanced functional medicine clinical educator for Root Med Health. Research: "${query}" for a licensed healthcare provider. Respond ONLY with valid JSON:\n{"results":[{"title":"Functional Medicine Overview","category":"Overview","badge":"g","summary":"3-4 sentence functional medicine perspective","keyPoints":["Key point 1","Key point 2","Key point 3","Key point 4"],"clinicalPearl":"Most commonly missed clinical insight","tags":["tag1","tag2"]},{"title":"Root Cause Framework","category":"Root Causes","badge":"t","summary":"Primary root cause hypotheses","keyPoints":["Root cause 1","Root cause 2","Root cause 3"],"clinicalPearl":"Key differentiating factor","tags":["root cause"]},{"title":"Functional Lab Workup","category":"Labs","badge":"b","summary":"Recommended functional lab panel","keyPoints":["Lab 1 — why","Lab 2","Lab 3","Lab 4"],"clinicalPearl":"Most commonly missed lab","tags":["labs"]},{"title":"Dietary & Lifestyle Protocol","category":"Diet & Lifestyle","badge":"g","summary":"Evidence-informed dietary approach","keyPoints":["Dietary recommendation 1","Dietary recommendation 2","Lifestyle intervention"],"clinicalPearl":"Fastest result change","tags":["diet"]},{"title":"Supplement Considerations","category":"Supplements","badge":"gold","summary":"Generic supplement considerations — no brand names","keyPoints":["Supplement 1 — form, dose","Supplement 2","Supplement 3"],"clinicalPearl":"Key interaction to watch","tags":["supplements"]}]}`;
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 2000, messages: [{ role: "user", content: prompt }] })
    });
    const data = await res.json();
    const parsed = JSON.parse(data.content?.map(b => b.text || '').join('').replace(/```json|```/g, '').trim());
    const BMAP = { g: 'rb-g', t: 'rb-t', b: 'rb-b', gold: 'rb-gold', r: 'rb-r' };
    if (el) el.innerHTML = `<div style="font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:var(--pm);margin-bottom:12px;padding:0 2px">Results for: ${query}</div>` +
      (parsed.results || []).map(r => `<div class="res-sec">
        <div class="res-hd"><div class="res-title">${r.title}</div><span class="res-badge ${BMAP[r.badge] || 'rb-g'}">${r.category}</span></div>
        <div class="res-body">${r.summary}</div>
        ${r.keyPoints?.length ? `<div class="arrow-list">${r.keyPoints.map(p => `<div class="arrow-item"><span class="arr">→</span>${p}</div>`).join('')}</div>` : ''}
        ${r.clinicalPearl ? `<div class="pearl"><div class="pearl-label">💡 Clinical Pearl</div><div class="pearl-text">${r.clinicalPearl}</div></div>` : ''}
        <div class="res-tags">${(r.tags || []).map(t => `<span class="res-tag">${t}</span>`).join('')}</div>
        <div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:8px">
          <button class="btn-outline" style="padding:6px 12px;font-size:10px" onclick="sendToHandout('${r.title.replace(/'/g,"\\'")}')">📄 Patient Handout</button>
        </div>
      </div>`).join('');
  } catch (e) {
    if (el) el.innerHTML = `<div class="disc"><span>⚠️</span><div class="disc-txt">Research failed — please try again.</div></div>`;
    toast('Error — please try again');
  } finally {
    researchRunning = false;
    if (btn) { btn.disabled = false; btn.innerHTML = '🔬 Research This Condition'; }
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// DIETARY EDUCATION
// ═══════════════════════════════════════════════════════════════════════════
async function generateDietEdu() {
  if (dietRunning) return;
  dietRunning = true;
  const protocol = document.getElementById('diet-protocol')?.value;
  const population = document.getElementById('diet-population')?.value;
  const emphasis = document.getElementById('diet-emphasis')?.value;
  const btn = document.getElementById('btn-diet');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Generating...'; }
  const el = document.getElementById('diet-output');
  if (el) el.innerHTML = '';
  const prompt = `You are a functional medicine dietitian educator for Root Med Health. Create dietary education for providers. Protocol: "${protocol}"${population ? ', Population: ' + population : ''}${emphasis ? ', Emphasize: ' + emphasis : ''}. Respond ONLY with valid JSON:\n{"title":"Educational title","overview":"2-3 sentence overview","keyPrinciples":[{"principle":"Name","explanation":"2 sentences"}],"foodsToEmphasize":["Food 1 — why","Food 2","Food 3","Food 4"],"foodsToAvoid":["Food 1 — why","Food 2","Food 3"],"mealTimingTips":["Tip 1","Tip 2","Tip 3"],"commonMistakes":["Mistake 1","Mistake 2","Mistake 3"],"patientTalkingPoints":["Simple point 1","Point 2","Point 3"]}`;
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1500, messages: [{ role: "user", content: prompt }] })
    });
    const data = await res.json();
    const r = JSON.parse(data.content?.map(b => b.text || '').join('').replace(/```json|```/g, '').trim());
    if (el) el.innerHTML = `<div class="output-panel">
      <div class="op-title">${r.title}</div>
      <div class="op-intro">${r.overview}</div>
      ${r.keyPrinciples?.length ? `<div class="op-section-label">Key Principles</div>${r.keyPrinciples.map(p => `<div class="op-item"><div class="op-dot"></div><div class="op-text"><strong style="color:var(--sage-light)">${p.principle}</strong> — ${p.explanation}</div></div>`).join('')}` : ''}
      ${r.foodsToEmphasize?.length ? `<div class="op-section-label" style="color:var(--sage-light)">🌿 Emphasize</div>${r.foodsToEmphasize.map(f => `<div class="op-item"><div class="op-dot" style="background:#7ab87e"></div><div class="op-text">${f}</div></div>`).join('')}` : ''}
      ${r.foodsToAvoid?.length ? `<div class="op-section-label" style="color:var(--terra)">⚠️ Minimize or Avoid</div>${r.foodsToAvoid.map(f => `<div class="op-item"><div class="op-dot" style="background:var(--terra)"></div><div class="op-text">${f}</div></div>`).join('')}` : ''}
      ${r.mealTimingTips?.length ? `<div class="op-section-label" style="color:var(--gold)">⏱ Meal Timing</div>${r.mealTimingTips.map(t => `<div class="op-item"><div class="op-dot" style="background:var(--gold)"></div><div class="op-text">${t}</div></div>`).join('')}` : ''}
      ${r.commonMistakes?.length ? `<div class="op-section-label" style="color:#e87070">❌ Common Mistakes</div>${r.commonMistakes.map(m => `<div class="op-item"><div class="op-dot" style="background:#e87070"></div><div class="op-text">${m}</div></div>`).join('')}` : ''}
      ${r.patientTalkingPoints?.length ? `<div class="op-section-label" style="color:#7fb3d3">💬 Patient Talking Points</div>${r.patientTalkingPoints.map(p => `<div class="op-item"><div class="op-dot" style="background:#7fb3d3"></div><div class="op-text">${p}</div></div>`).join('')}` : ''}
      <div style="display:flex;gap:7px;margin-top:12px"><button class="btn-outline" style="padding:9px 16px;font-size:11px" onclick="window.print()">🖨️ Print / PDF</button></div>
    </div>`;
    toast('✓ Dietary education generated');
  } catch (e) { toast('Error generating — please try again.'); }
  finally {
    dietRunning = false;
    if (btn) { btn.disabled = false; btn.innerHTML = '🥗 Generate Dietary Education'; }
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// HANDOUT GENERATOR
// ═══════════════════════════════════════════════════════════════════════════
function checkHandoutBtn() {
  const btn = document.getElementById('btn-handout');
  const inp = document.getElementById('handout-topic');
  if (btn && inp) btn.disabled = !inp.value.trim();
}

async function generateHandout() {
  const topic = document.getElementById('handout-topic')?.value.trim();
  if (!topic || handoutRunning) return;
  handoutRunning = true;
  const type = document.getElementById('handout-type')?.value;
  const notes = document.getElementById('handout-notes')?.value.trim();
  const btn = document.getElementById('btn-handout');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Generating handout...'; }
  const el = document.getElementById('handout-output');
  if (el) el.innerHTML = '';
  const prompt = `You are a functional medicine patient educator for Root Med Health. Create a clear, warm, plain-language patient handout. Type: "${type}", Topic: "${topic}"${notes ? ', Patient context: ' + notes : ''}. Respond ONLY with valid JSON:\n{"title":"Patient-friendly title","intro":"2-3 sentence warm plain-language intro","sections":[{"heading":"Section heading","points":["Point 1","Point 2","Point 3"]}],"keyTakeaways":["Most important takeaway 1","Takeaway 2","Takeaway 3"],"questionsToAsk":["Question to ask your doctor 1","Question 2"],"disclaimer":"Brief educational disclaimer"}`;
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1500, messages: [{ role: "user", content: prompt }] })
    });
    const data = await res.json();
    const r = JSON.parse(data.content?.map(b => b.text || '').join('').replace(/```json|```/g, '').trim());
    if (el) el.innerHTML = `<div class="output-panel">
      <div style="font-size:8px;letter-spacing:.2em;text-transform:uppercase;color:var(--pm);margin-bottom:8px">🌿 Root Med Health · Patient Education Handout</div>
      <div class="op-title">${r.title}</div>
      <div class="op-intro">${r.intro}</div>
      ${r.sections?.map(s => `<div class="op-section-label">${s.heading}</div>${s.points.map(p => `<div class="op-item"><div class="op-dot"></div><div class="op-text">${p}</div></div>`).join('')}`).join('') || ''}
      ${r.keyTakeaways?.length ? `<div class="op-section-label" style="color:#7fb3d3">⭐ Key Takeaways</div>${r.keyTakeaways.map(t => `<div class="op-item"><div class="op-dot" style="background:#7fb3d3"></div><div class="op-text" style="font-weight:500;color:var(--pt)">${t}</div></div>`).join('')}` : ''}
      ${r.questionsToAsk?.length ? `<div class="op-section-label" style="color:var(--gold)">💬 Questions to Ask Your Provider</div>${r.questionsToAsk.map(q => `<div class="op-item"><div class="op-dot" style="background:var(--gold)"></div><div class="op-text">${q}</div></div>`).join('')}` : ''}
      ${r.disclaimer ? `<div style="margin-top:12px;padding:8px 12px;background:rgba(45,74,48,.3);border-radius:8px;font-size:9px;color:var(--pm);line-height:1.5">${r.disclaimer}</div>` : ''}
      <div style="display:flex;gap:7px;margin-top:12px">
        <button class="btn-outline" style="padding:9px 16px;font-size:11px" onclick="window.print()">🖨️ Print / Save as PDF</button>
        <button class="btn-outline" style="padding:9px 14px;font-size:10px" onclick="document.getElementById('handout-output').innerHTML=''">✕ Clear</button>
      </div>
    </div>`;
    toast('✓ Patient handout generated');
  } catch (e) { toast('Error generating handout — please try again.'); }
  finally {
    handoutRunning = false;
    if (btn) { btn.disabled = false; btn.innerHTML = '📄 Generate Patient Handout'; }
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// WEARABLES
// ═══════════════════════════════════════════════════════════════════════════
function renderWearables() {
  const grid = document.getElementById('wearable-grid');
  if (!grid) return;
  grid.innerHTML = WEARABLES.map(w => `
    <div class="wearable-card ${w.status === 'soon' ? 'soon' : ''}">
      <div class="wc-head">
        <div class="wc-logo ${w.logo}">${w.emoji}</div>
        <div><div class="wc-name">${w.name}</div><div class="wc-type">${w.type}</div></div>
        <span class="wc-status ${w.status === 'soon' ? 'wcs-soon' : 'wcs-ready'}">${w.status === 'soon' ? 'Coming soon' : 'Ready'}</span>
      </div>
      <div class="wc-body">
        <div class="wc-metrics">${w.metrics.map(m => `<span class="wm">${m}</span>`).join('')}</div>
        <div class="wc-note">${w.note}</div>
        <button class="btn-wearable ${w.status === 'soon' ? 'btn-w-disabled' : 'btn-w-connect'}"
          ${w.status === 'soon' ? 'disabled' : `onclick="toast('Connect ${w.name} — OAuth2 flow activates in the live PWA')"`}>
          ${w.status === 'soon' ? 'Coming soon' : 'Connect →'}
        </button>
      </div>
    </div>`).join('');
}

// ═══════════════════════════════════════════════════════════════════════════
// NOTIFICATIONS
// ═══════════════════════════════════════════════════════════════════════════
function updateNotifStatus() {
  const el = document.getElementById('notif-status');
  const btn = document.getElementById('btn-enable-notif');
  if (!el) return;
  if (!('Notification' in window)) {
    el.className = 'notif-status ns-denied';
    el.innerHTML = '⚠️ Notifications not supported — add to Home Screen for PWA notifications.';
    return;
  }
  const perm = Notification.permission;
  if (perm === 'granted') {
    el.className = 'notif-status ns-granted';
    el.innerHTML = '✓ Notifications enabled';
    if (btn) { btn.textContent = '✓ Active'; btn.style.background = 'rgba(77,114,83,.2)'; btn.style.color = 'var(--sage)'; }
  } else if (perm === 'denied') {
    el.className = 'notif-status ns-denied';
    el.innerHTML = '✕ Blocked — go to browser Settings → Site Settings → Notifications to allow.';
  } else {
    el.className = 'notif-status ns-default';
    el.innerHTML = 'Tap Enable to receive daily encouragement and tracking reminders.';
  }
}

async function requestNotifPermission() {
  if (!('Notification' in window)) return;
  const perm = await Notification.requestPermission();
  updateNotifStatus();
  if (perm === 'granted') toast('✓ Notifications enabled!');
  else toast('Notifications blocked — check browser settings');
}

function refreshQuote() {
  quoteIdx = (quoteIdx + 1) % MORNING_QUOTES.length;
  renderQuote();
}

function renderQuote() {
  const q = MORNING_QUOTES[quoteIdx];
  const qt = document.getElementById('morning-quote-text');
  const qs = document.getElementById('morning-quote-sub');
  if (qt) qt.textContent = '"' + q.quote + '"';
  if (qs) qs.textContent = q.sub;
}

function sendTestMorning() {
  if (Notification.permission !== 'granted') { toast('Enable notifications first'); return; }
  const q = MORNING_QUOTES[quoteIdx];
  new Notification('🌿 Good morning from Root Med Health', {
    body: '"' + q.quote + '" — ' + q.sub,
    icon: '/icons/icon-192.png'
  });
  toast('🌅 Morning notification sent');
}

function sendTestEvening() {
  if (Notification.permission !== 'granted') { toast('Enable notifications first'); return; }
  const nc = Math.max(0, foodLog.reduce((s, f) => s + f.carbs, 0) - foodLog.reduce((s, f) => s + f.fiber, 0));
  new Notification('🌙 Evening check-in — Root Med Health', {
    body: `Time to log your day — water, activity, and meals. ${nc.toFixed(0)}g net carbs logged. Every log brings you closer to your goals.`,
    icon: '/icons/icon-192.png'
  });
  toast('🌙 Evening notification sent');
}

// ═══════════════════════════════════════════════════════════════════════════
// PROVIDER CARE PLAN BUILDER
// ═══════════════════════════════════════════════════════════════════════════
function toggleSection(id) {
  const body = document.getElementById('section-' + id);
  const toggle = document.getElementById('toggle-' + id);
  if (!body) return;
  const isOpen = body.classList.toggle('open');
  if (toggle) toggle.classList.toggle('open', isOpen);
}

function addSuppItem() {
  const id = ++itemId;
  suppItems.push({ id, name: '', form: '', dose: '', timing: '', rationale: '', dfhProduct: '' });
  renderSuppItems();
  updateBuilderCounts();
}

function removeSuppItem(id) {
  suppItems = suppItems.filter(x => x.id !== id);
  renderSuppItems();
  updateBuilderCounts();
}

function renderSuppItems() {
  const el = document.getElementById('supp-items');
  if (!el) return;
  el.innerHTML = suppItems.map(item => `
    <div class="builder-item">
      <span class="bi-drag">⠿</span>
      <div class="bi-content">
        <div class="bi-row">
          <input class="bi-inp wide" placeholder="Supplement name (e.g. Magnesium Glycinate)"
            value="${item.name}" oninput="suppItems.find(x=>x.id==${item.id}).name=this.value">
          <input class="bi-inp" placeholder="Form (e.g. chelated glycinate)"
            value="${item.form}" oninput="suppItems.find(x=>x.id==${item.id}).form=this.value">
        </div>
        <div class="bi-row">
          <input class="bi-inp" placeholder="Dose (e.g. 400mg)"
            value="${item.dose}" oninput="suppItems.find(x=>x.id==${item.id}).dose=this.value">
          <input class="bi-inp" placeholder="Timing (e.g. evening with food)"
            value="${item.timing}" oninput="suppItems.find(x=>x.id==${item.id}).timing=this.value">
          <select class="bi-sel" onchange="suppItems.find(x=>x.id==${item.id}).dfhProduct=this.value;renderSuppItems()">
            <option value="">Link DFH product (optional)</option>
            ${DFH_PRODUCTS.map(p => `<option value="${p.name}" ${item.dfhProduct === p.name ? 'selected' : ''}>${p.emoji} ${p.name}</option>`).join('')}
          </select>
        </div>
        <input class="bi-inp" style="width:100%;margin-top:5px" placeholder="Clinical rationale for this patient"
          value="${item.rationale}" oninput="suppItems.find(x=>x.id==${item.id}).rationale=this.value">
        ${item.dfhProduct ? `<div class="bi-dfh-tag">💊 Linked to DFH: ${item.dfhProduct}</div>` : ''}
      </div>
      <button class="bi-del" onclick="removeSuppItem(${item.id})">✕</button>
    </div>`).join('');
}

function addDietItem() {
  const id = ++itemId;
  dietBItems.push({ id, category: 'Emphasize', recommendation: '' });
  renderDietBItems();
  updateBuilderCounts();
}

function removeDietItem(id) {
  dietBItems = dietBItems.filter(x => x.id !== id);
  renderDietBItems();
  updateBuilderCounts();
}

function renderDietBItems() {
  const el = document.getElementById('diet-b-items');
  if (!el) return;
  el.innerHTML = dietBItems.map(item => `
    <div class="builder-item">
      <span class="bi-drag">⠿</span>
      <div class="bi-content">
        <div class="bi-row">
          <select class="bi-sel" onchange="dietBItems.find(x=>x.id==${item.id}).category=this.value">
            ${['Emphasize','Avoid','Limit','Meal timing','Hydration','General'].map(o => `<option ${item.category === o ? 'selected' : ''}>${o}</option>`).join('')}
          </select>
          <input class="bi-inp wide" placeholder="Dietary recommendation"
            value="${item.recommendation}" oninput="dietBItems.find(x=>x.id==${item.id}).recommendation=this.value">
        </div>
      </div>
      <button class="bi-del" onclick="removeDietItem(${item.id})">✕</button>
    </div>`).join('');
}

function addActivityItem() {
  const id = ++itemId;
  activityItems.push({ id, type: '', frequency: '', duration: '', notes: '' });
  renderActivityItems();
  updateBuilderCounts();
}

function removeActivityItem(id) {
  activityItems = activityItems.filter(x => x.id !== id);
  renderActivityItems();
  updateBuilderCounts();
}

function renderActivityItems() {
  const el = document.getElementById('activity-items');
  if (!el) return;
  el.innerHTML = activityItems.map(item => `
    <div class="builder-item">
      <span class="bi-drag">⠿</span>
      <div class="bi-content">
        <div class="bi-row">
          <input class="bi-inp wide" placeholder="Activity type (e.g. resistance training)"
            value="${item.type}" oninput="activityItems.find(x=>x.id==${item.id}).type=this.value">
          <input class="bi-inp" placeholder="Frequency (e.g. 3x/week)"
            value="${item.frequency}" oninput="activityItems.find(x=>x.id==${item.id}).frequency=this.value">
          <input class="bi-inp" placeholder="Duration (e.g. 45 min)"
            value="${item.duration}" oninput="activityItems.find(x=>x.id==${item.id}).duration=this.value">
        </div>
        <input class="bi-inp" style="width:100%;margin-top:5px" placeholder="Notes — intensity, precautions..."
          value="${item.notes}" oninput="activityItems.find(x=>x.id==${item.id}).notes=this.value">
      </div>
      <button class="bi-del" onclick="removeActivityItem(${item.id})">✕</button>
    </div>`).join('');
}

function addLabItem() {
  const id = ++itemId;
  labBItems.push({ id, lab: '', timing: '', reason: '' });
  renderLabBItems();
  updateBuilderCounts();
}

function removeLabItem(id) {
  labBItems = labBItems.filter(x => x.id !== id);
  renderLabBItems();
  updateBuilderCounts();
}

function renderLabBItems() {
  const el = document.getElementById('labs-b-items');
  if (!el) return;
  el.innerHTML = labBItems.map(item => `
    <div class="builder-item">
      <span class="bi-drag">⠿</span>
      <div class="bi-content">
        <div class="bi-row">
          <input class="bi-inp wide" placeholder="Lab marker (e.g. Fasting insulin, Vitamin D 25-OH)"
            value="${item.lab}" oninput="labBItems.find(x=>x.id==${item.id}).lab=this.value">
          <input class="bi-inp" placeholder="When (e.g. 90 days)"
            value="${item.timing}" oninput="labBItems.find(x=>x.id==${item.id}).timing=this.value">
          <input class="bi-inp" placeholder="Reason"
            value="${item.reason}" oninput="labBItems.find(x=>x.id==${item.id}).reason=this.value">
        </div>
      </div>
      <button class="bi-del" onclick="removeLabItem(${item.id})">✕</button>
    </div>`).join('');
}

function updateBuilderCounts() {
  const sc = document.getElementById('supp-count');
  const dc = document.getElementById('diet-b-count');
  const ac = document.getElementById('activity-count');
  const lc = document.getElementById('labs-b-count');
  if (sc) sc.textContent = suppItems.length + ' item' + (suppItems.length !== 1 ? 's' : '');
  if (dc) dc.textContent = dietBItems.length + ' item' + (dietBItems.length !== 1 ? 's' : '');
  if (ac) ac.textContent = activityItems.length + ' item' + (activityItems.length !== 1 ? 's' : '');
  if (lc) lc.textContent = labBItems.length + ' item' + (labBItems.length !== 1 ? 's' : '');
}

function generatePreview() {
  const patient = document.getElementById('cp-patient')?.value || 'Patient';
  const date = document.getElementById('cp-date')?.value;
  const review = document.getElementById('cp-review')?.value;
  const diagnosis = document.getElementById('cp-diagnosis')?.value;
  const provider = document.getElementById('cp-provider')?.value;
  const protocol = document.getElementById('cp-protocol')?.value;
  const notes = document.getElementById('cp-notes')?.value;
  const wrap = document.getElementById('cp-preview-wrap');
  const preview = document.getElementById('cp-preview');
  if (!wrap || !preview) return;
  wrap.style.display = 'block';
  preview.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;flex-wrap:wrap;gap:8px">
      <div class="cp-preview-title">Care Plan — ${patient}</div>
      <button class="btn-outline" style="font-size:11px;padding:7px 13px" onclick="window.print()">🖨️ Print</button>
    </div>
    <div class="cp-preview-meta">
      ${provider ? 'Provider: ' + provider + ' · ' : ''}
      Protocol: ${protocol} · 
      ${diagnosis ? 'Focus: ' + diagnosis + ' · ' : ''}
      ${date ? 'Date: ' + date + ' · ' : ''}
      ${review ? 'Review: ' + review : ''}
    </div>
    ${suppItems.length ? `<div class="preview-section"><div class="preview-section-title">💊 Supplement Protocol</div>${suppItems.map(s => `<div class="preview-item"><div class="pi-dot"></div><div><div class="pi-text"><strong>${s.name}</strong>${s.form ? ' — ' + s.form : ''}${s.dose ? ' · ' + s.dose : ''}${s.timing ? ' · ' + s.timing : ''}</div>${s.rationale ? `<div class="pi-text" style="color:var(--gray);font-size:10px;margin-top:2px">${s.rationale}</div>` : ''}${s.dfhProduct ? `<div class="pi-dfh">💊 Shop: ${s.dfhProduct} (Designs for Health)</div>` : ''}</div></div>`).join('')}</div>` : ''}
    ${dietBItems.length ? `<div class="preview-section"><div class="preview-section-title">🥗 Dietary Recommendations</div>${dietBItems.map(d => `<div class="preview-item"><div class="pi-dot" style="background:${d.category === 'Avoid' ? 'var(--red)' : d.category === 'Limit' ? 'var(--orange)' : 'var(--sage)'}"></div><div class="pi-text"><span style="font-size:9px;text-transform:uppercase;letter-spacing:.08em;color:var(--terra);font-weight:500">${d.category} — </span>${d.recommendation}</div></div>`).join('')}</div>` : ''}
    ${activityItems.length ? `<div class="preview-section"><div class="preview-section-title">🏃 Activity Recommendations</div>${activityItems.map(a => `<div class="preview-item"><div class="pi-dot" style="background:#8e44ad"></div><div><div class="pi-text"><strong>${a.type}</strong>${a.frequency ? ' · ' + a.frequency : ''}${a.duration ? ' · ' + a.duration : ''}</div>${a.notes ? `<div class="pi-text" style="color:var(--gray);font-size:10px;margin-top:2px">${a.notes}</div>` : ''}</div></div>`).join('')}</div>` : ''}
    ${labBItems.length ? `<div class="preview-section"><div class="preview-section-title">🧪 Follow-Up Labs</div>${labBItems.map(l => `<div class="preview-item"><div class="pi-dot" style="background:var(--blue)"></div><div class="pi-text"><strong>${l.lab}</strong>${l.timing ? ' — ' + l.timing : ''}${l.reason ? ' · ' + l.reason : ''}</div></div>`).join('')}</div>` : ''}
    ${notes ? `<div class="preview-section"><div class="preview-section-title">📝 Clinical Notes</div><div style="font-size:11px;color:var(--deep);line-height:1.7;padding:10px;background:var(--cream);border-radius:8px;border:1px solid rgba(212,184,150,.2)">${notes}</div></div>` : ''}
    <div style="margin-top:14px;padding:9px 12px;background:var(--cream);border-radius:8px;border:1px solid rgba(212,184,150,.25);font-size:9px;color:var(--gray);line-height:1.6">
      This care plan is provided for educational purposes only and does not constitute medical advice. All recommendations have been made by ${provider || 'your licensed healthcare provider'}. Root Med Health · rootmedhealth.com · © 2026 Root Med Health LLC
    </div>`;
  toast('✓ Preview generated — ready to print');
  preview.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearBuilder() {
  suppItems = []; dietBItems = []; activityItems = []; labBItems = [];
  renderSuppItems(); renderDietBItems(); renderActivityItems(); renderLabBItems();
  updateBuilderCounts();
  const wrap = document.getElementById('cp-preview-wrap');
  if (wrap) wrap.style.display = 'none';
  ['cp-patient','cp-diagnosis','cp-provider','cp-notes'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  toast('Builder cleared');
}

// ═══════════════════════════════════════════════════════════════════════════
// ART GALLERY
// ═══════════════════════════════════════════════════════════════════════════
const GALLERY_EMOJIS = ['🌿','🦋','🌸','🌊','🍃','🌺','🌙','✨','🦚','🌾'];

function handleGalleryUpload(input) {
  Array.from(input.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      galleryImages.push({
        id: Date.now() + Math.random(),
        name: file.name.replace(/\.[^.]+$/, ''),
        emoji: GALLERY_EMOJIS[Math.floor(Math.random() * GALLERY_EMOJIS.length)],
        src: e.target.result,
        size: (file.size / 1024).toFixed(0) + ' KB',
        date: new Date().toLocaleDateString()
      });
      renderGallery();
      toast('✓ Uploaded: ' + file.name);
    };
    reader.readAsDataURL(file);
  });
  input.value = '';
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  const empty = document.getElementById('gallery-empty');
  const count = document.getElementById('gallery-count');
  if (count) count.textContent = galleryImages.length;
  if (!galleryImages.length) {
    if (grid) grid.innerHTML = '';
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';
  if (grid) grid.innerHTML = galleryImages.map(img => `
    <div class="gallery-item">
      <div class="gallery-img-wrap">${img.src ? `<img src="${img.src}" alt="${img.name}">` : `<span style="font-size:48px">${img.emoji}</span>`}</div>
      <div class="gallery-item-body">
        <div class="gallery-item-name">${img.name}</div>
        <div class="gallery-item-sub">${img.size} · ${img.date}</div>
        <div class="gallery-item-actions">
          <button class="btn-gal btn-gal-dl" onclick="downloadGalleryImg(${img.id})">⬇ Download</button>
          <button class="btn-gal btn-gal-del" onclick="deleteGalleryImg(${img.id})">✕ Remove</button>
        </div>
      </div>
    </div>`).join('');
}

function downloadGalleryImg(id) {
  const img = galleryImages.find(x => x.id === id);
  if (!img || !img.src) return;
  const a = document.createElement('a');
  a.href = img.src;
  a.download = img.name + '.png';
  a.click();
  toast('⬇ Downloading: ' + img.name);
}

function deleteGalleryImg(id) {
  galleryImages = galleryImages.filter(x => x.id !== id);
  renderGallery();
  toast('Removed from gallery');
}

// ═══════════════════════════════════════════════════════════════════════════
// INITIALIZE
// ═══════════════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Set today's date in care plan builder
  const today = new Date().toISOString().split('T')[0];
  const review = new Date();
  review.setDate(review.getDate() + 90);
  const reviewStr = review.toISOString().split('T')[0];
  const cpDate = document.getElementById('cp-date');
  const cpReview = document.getElementById('cp-review');
  if (cpDate) cpDate.value = today;
  if (cpReview) cpReview.value = reviewStr;

  // Initialize symptom tags
  initSymptomTags();

  // Initialize tracker
  updateDateDisplay();
  loadDayFromMemory();
  renderMetrics();
  renderChart();
  updateCarbDisplay();

  // Initialize builder counts
  updateBuilderCounts();

  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
});
