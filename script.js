const data = {
  ATL:{name:"Atlanta Hartsfield-Jackson",resources:[
    {category:"physical",name:"XpresSpa",description:"Massage and nail services in Concourse A."},
    {category:"physical",name:"Minute Suites",description:"Private nap rooms in Concourse B."},
    {category:"mental",name:"Interfaith Chapel",description:"Quiet reflection space in Concourse F."},
    {category:"mental",name:"Quiet Room",description:"Low-stimulation room in Concourse E."},
    {category:"social",name:"Delta Sky Club",description:"Crew lounge in Concourse F."},
    {category:"social",name:"American Admirals Club",description:"Networking space in Concourse T."}
  ]},
  PEK:{name:"Beijing Capital International",resources:[
    {category:"physical",name:"Dragonfly Spa",description:"Therapeutic spa in Terminal 3."},
    {category:"physical",name:"Sleep Pods",description:"Hourly rest cabins in Terminal 3."},
    {category:"mental",name:"Prayer Room",description:"Quiet space for reflection in Terminal 3."},
    {category:"mental",name:"Quiet Seating",description:"Low-noise area in Terminal 2."},
    {category:"social",name:"Air China Business Lounge",description:"Meeting lounge in Terminal 3."},
    {category:"social",name:"BGS Premier Lounge",description:"Relaxed gathering spot in Terminal 2."}
  ]},
  DXB:{name:"Dubai International",resources:[
    {category:"physical",name:"Timeless Spa",description:"Full-service spa in Concourse B."},
    {category:"physical",name:"Snooze Cube",description:"Sleep pods in Terminal 1."},
    {category:"mental",name:"Zen Garden",description:"Indoor garden for relaxation in Terminal 3."},
    {category:"mental",name:"Quiet Lounge",description:"Calming space in Concourse C."},
    {category:"social",name:"Emirates Lounge",description:"Crew lounge in Concourse A."},
    {category:"social",name:"Marhaba Lounge",description:"Friendly meeting space in Terminal 1."}
  ]},
  HND:{name:"Tokyo Haneda",resources:[
    {category:"physical",name:"Refresh Square",description:"Showers and massage in Terminal 1."},
    {category:"physical",name:"Nap Rooms",description:"Hourly rest rooms in Terminal 2."},
    {category:"mental",name:"Prayer Room",description:"Quiet room in Terminal 1."},
    {category:"mental",name:"Observation Deck",description:"Open-air deck for mental break."},
    {category:"social",name:"ANA Lounge",description:"Crew lounge in Terminal 2."},
    {category:"social",name:"JAL Sakura Lounge",description:"Networking lounge in Terminal 1."}
  ]},
  LAX:{name:"Los Angeles International",resources:[
    {category:"physical",name:"Be Relax Spa",description:"Massage and treatments in Terminal 1."},
    {category:"physical",name:"XpresSpa",description:"Express spa services in Terminal 5."},
    {category:"mental",name:"Interfaith Chapel",description:"Quiet prayer space in Terminal 4."},
    {category:"mental",name:"Art Exhibitions",description:"Rotating art displays across terminals."},
    {category:"social",name:"Delta Sky Club",description:"Crew lounge in Terminal 3."},
    {category:"social",name:"United Club",description:"Networking space in Terminal 7."}
  ]},
  ORD:{name:"Chicago O'Hare",resources:[
    {category:"physical",name:"Urban Oasis Spa",description:"Spa and showers in Terminal 1."},
    {category:"physical",name:"Yoga Room",description:"Stretching space in Terminal 3."},
    {category:"mental",name:"Chapel",description:"Quiet chapel in Terminal 2."},
    {category:"mental",name:"Quiet Room",description:"Relaxation area in Terminal 3."},
    {category:"social",name:"United Club",description:"Crew lounge in Terminal 2."},
    {category:"social",name:"American Admirals Club",description:"Lounge in Terminal 3."}
  ]},
  LHR:{name:"London Heathrow",resources:[
    {category:"physical",name:"Be Relax Spa",description:"Quick treatments in Terminal 5."},
    {category:"physical",name:"Plaza Premium Spa",description:"Spa services in Terminal 2."},
    {category:"mental",name:"Multi-faith Prayer Room",description:"Silent space in Terminal 3."},
    {category:"mental",name:"Quiet Room",description:"Rest area in Terminal 2."},
    {category:"social",name:"BA Galleries Lounge",description:"Crew lounge in Terminal 5."},
    {category:"social",name:"Virgin Atlantic Clubhouse",description:"Social hub in Terminal 3."}
  ]},
  HKG:{name:"Hong Kong International",resources:[
    {category:"physical",name:"Plaza Premium Spa",description:"Relaxing treatments in Terminal 1."},
    {category:"physical",name:"Wellness Spa at The Pier",description:"Hot showers and massages."},
    {category:"mental",name:"Prayer Rooms",description:"Quiet spaces near Gates 40 and 60."},
    {category:"mental",name:"Relaxation Zone",description:"Calming area at The Wing."},
    {category:"social",name:"Cathay Pacific Lounge",description:"Crew lounge in Terminal 1."},
    {category:"social",name:"Plaza Premium Lounge",description:"Casual meeting spot in Terminal 1."}
  ]},
  PVG:{name:"Shanghai Pudong",resources:[
    {category:"physical",name:"XpresSpa",description:"Express treatments in Terminal 2."},
    {category:"physical",name:"Aqua Spa",description:"Full-service spa in Terminal 1."},
    {category:"mental",name:"Prayer Room",description:"Silent room in Terminal 1."},
    {category:"mental",name:"Quiet Rest Area",description:"Seating zone in Terminal 2."},
    {category:"social",name:"China Eastern Lounge",description:"Crew lounge in Terminal 1."},
    {category:"social",name:"Air China Lounge",description:"Lounge in Terminal 2."}
  ]},
  CDG:{name:"Paris Charles de Gaulle",resources:[
    {category:"physical",name:"Be Relax Spa",description:"Spa services in Terminal 2E."},
    {category:"physical",name:"Instant Paris Lounge",description:"Sleep pods in Terminal 2E."},
    {category:"mental",name:"Meditation Room",description:"Quiet space in Terminal 2F."},
    {category:"mental",name:"Prayer Room",description:"Multi-faith room in Terminal 1."},
    {category:"social",name:"Air France Lounge",description:"Crew lounge in Terminal 2E."},
    {category:"social",name:"YotelAir Lounge",description:"Day rooms in Terminal 2E."}
  ]},
  DFW:{name:"Dallas/Fort Worth",resources:[
    {category:"physical",name:"XpresSpa",description:"Spa services near Gate D21."},
    {category:"physical",name:"Minute Suites",description:"Private suites near Gate D23."},
    {category:"mental",name:"Interfaith Chapel",description:"Quiet chapel near Gate D22."},
    {category:"mental",name:"Yoga Studio",description:"Stretching area near Gate D40."},
    {category:"social",name:"American Admirals Club",description:"Lounge near Gate C20."},
    {category:"social",name:"Centurion Lounge",description:"Gathering spot near Gate D12."}
  ]},
  CAN:{name:"Guangzhou Baiyun",resources:[
    {category:"physical",name:"Pullman Hotel Spa",description:"Spa in Terminal 2."},
    {category:"physical",name:"Resting Pods",description:"Nap pods in Terminal 2."},
    {category:"mental",name:"Prayer Room",description:"Meditation space in Terminal 2."},
    {category:"mental",name:"Library Corner",description:"Quiet reading area in Terminal 1."},
    {category:"social",name:"China Southern Lounge",description:"Crew lounge in Terminal 2."},
    {category:"social",name:"Premium Lounge",description:"Relaxed meeting spot in Terminal 1."}
  ]},
  AMS:{name:"Amsterdam Schiphol",resources:[
    {category:"physical",name:"XpresSpa",description:"Massage services in Lounge 2."},
    {category:"physical",name:"Mercure Fitness",description:"Gym inside the Mercure Hotel."},
    {category:"mental",name:"Meditation Centre",description:"Quiet chapel and meditation room."},
    {category:"mental",name:"Airport Library",description:"Silent reading space in Lounge 2."},
    {category:"social",name:"KLM Crown Lounge",description:"Crew lounge in Lounge 52."},
    {category:"social",name:"Aspire Lounge",description:"Meeting lounge in Lounge 26."}
  ]},
  FRA:{name:"Frankfurt",resources:[
    {category:"physical",name:"Be Relax Spa",description:"Spa treatments in Terminal 1."},
    {category:"physical",name:"LuxxLounge",description:"Day rooms and showers in Terminal 1."},
    {category:"mental",name:"Prayer Room",description:"Silent chapel in Terminal 1."},
    {category:"mental",name:"Quiet Zones",description:"Low-noise seating in Terminal 2."},
    {category:"social",name:"Lufthansa Senator Lounge",description:"Crew lounge in Terminal 1."},
    {category:"social",name:"Air Canada Maple Leaf Lounge",description:"Lounge in Terminal 1."}
  ]},
  IST:{name:"Istanbul",resources:[
    {category:"physical",name:"IGA Sleepod",description:"Sleep pods in the main hall."},
    {category:"physical",name:"Express Spa",description:"Massage services airside."},
    {category:"mental",name:"Mosque",description:"Prayer space in the departures hall."},
    {category:"mental",name:"Relaxation Rooms",description:"Quiet rooms near Gate B18."},
    {category:"social",name:"Turkish Airlines Lounge",description:"Crew hub near Concourse E."},
    {category:"social",name:"IGA Lounge",description:"Gathering lounge in the main hall."}
  ]},
  SIN:{name:"Singapore Changi",resources:[
    {category:"physical",name:"Aerotel Fitness & Pool",description:"Gym and pool in Terminal 1."},
    {category:"physical",name:"Be Relax Spa",description:"Treatments in Terminal 3."},
    {category:"mental",name:"Butterfly Garden",description:"Nature escape in Terminal 3."},
    {category:"mental",name:"Prayer Room",description:"Quiet room in Terminal 2."},
    {category:"social",name:"SilverKris Lounge",description:"Crew lounge in Terminal 3."},
    {category:"social",name:"The Haven by JetQuay",description:"Meeting lounge in Terminal 3."}
  ]},
  ICN:{name:"Seoul Incheon",resources:[
    {category:"physical",name:"Spa On Air",description:"Full spa with showers in Terminal 1."},
    {category:"physical",name:"Digital Gym",description:"Fitness area in Terminal 2."},
    {category:"mental",name:"Prayer Room",description:"Quiet space in Terminal 1."},
    {category:"mental",name:"Rest & Relax Zones",description:"Loungers and calm spaces in Terminal 2."},
    {category:"social",name:"Korean Air Lounge",description:"Crew lounge in Terminal 2."},
    {category:"social",name:"Asiana Lounge",description:"Meeting lounge in Terminal 1."}
  ]},
  DEL:{name:"Delhi Indira Gandhi",resources:[
    {category:"physical",name:"O2 Spa",description:"Spa services in Terminal 3."},
    {category:"physical",name:"Sleeping Pods",description:"Rest cabins in Terminal 3."},
    {category:"mental",name:"Meditation Room",description:"Peaceful room in Terminal 3."},
    {category:"mental",name:"Prayer Room",description:"Silent space in Terminal 2."},
    {category:"social",name:"Plaza Premium Lounge",description:"Crew lounge in Terminal 3."},
    {category:"social",name:"ITC Green Lounge",description:"Networking lounge in Terminal 3."}
  ]},
  DEN:{name:"Denver",resources:[
    {category:"physical",name:"XpresSpa",description:"Spa services on Concourse B."},
    {category:"physical",name:"Minute Suites",description:"Private rooms on Concourse A."},
    {category:"mental",name:"Interfaith Chapel",description:"Quiet chapel on Concourse A."},
    {category:"mental",name:"Art Exhibit",description:"Rotating exhibits on Concourse C."},
    {category:"social",name:"United Club",description:"Crew lounge on Concourse B East."},
    {category:"social",name:"Centurion Lounge",description:"Gathering space in Concourse C."}
  ]},
  BKK:{name:"Bangkok Suvarnabhumi",resources:[
    {category:"physical",name:"Chang Massage",description:"Thai massage in Concourse D."},
    {category:"physical",name:"Miracle Transit Hotel",description:"Day rooms in Concourse G."},
    {category:"mental",name:"Meditation Room",description:"Quiet space in Concourse D."},
    {category:"mental",name:"Prayer Room",description:"Silent room in Concourse F."},
    {category:"social",name:"Royal Orchid Lounge",description:"Thai Airways lounge in Concourse D."},
    {category:"social",name:"Miracle Lounge",description:"Meeting lounge in Concourse G."}
  ]},
  JFK:{name:"New York JFK",resources:[
    {category:"physical",name:"XpresSpa",description:"Express spa in Terminal 1."},
    {category:"physical",name:"Minute Suites",description:"Nap suites in Terminal 4."},
    {category:"mental",name:"Our Lady of the Skies Chapel",description:"Prayer space in Terminal 4."},
    {category:"mental",name:"Meditation Room",description:"Quiet room in Terminal 4."},
    {category:"social",name:"Wingtips Lounge",description:"Social lounge in Terminal 4."},
    {category:"social",name:"Delta Sky Club",description:"Crew lounge in Terminal 4."}
  ]},
  SFO:{name:"San Francisco",resources:[
    {category:"physical",name:"XpresSpa",description:"Spa services in Terminal 2."},
    {category:"physical",name:"Yoga Room",description:"Stretching space in Terminal 2."},
    {category:"mental",name:"Berman Reflection Room",description:"Quiet room in Terminal 1."},
    {category:"mental",name:"SFO Museum Exhibits",description:"Calming art throughout terminals."},
    {category:"social",name:"United Club",description:"Crew lounge in Terminal 3."},
    {category:"social",name:"American Admirals Club",description:"Lounge in Terminal 1."}
  ]},
  LAS:{name:"Las Vegas Harry Reid",resources:[
    {category:"physical",name:"XpresSpa",description:"Spa in the D Gates."},
    {category:"physical",name:"ZEROLEVEL Fitness",description:"Gym in Terminal 1."},
    {category:"mental",name:"Interfaith Chapel",description:"Chapel in the D Concourse."},
    {category:"mental",name:"Zero Level Meditation Room",description:"Calming space in Terminal 1."},
    {category:"social",name:"Centurion Lounge",description:"Gathering lounge in D Concourse."},
    {category:"social",name:"United Club",description:"Crew lounge in C Gate area."}
  ]},
  CLT:{name:"Charlotte Douglas",resources:[
    {category:"physical",name:"XpresSpa",description:"Spa services in Concourse A."},
    {category:"physical",name:"Minute Suites",description:"Private suites in Concourse D."},
    {category:"mental",name:"Interfaith Chapel",description:"Quiet chapel in the Atrium."},
    {category:"mental",name:"Reflection Room",description:"Calming space in Concourse D."},
    {category:"social",name:"American Admirals Club",description:"Crew lounge in Concourse C."},
    {category:"social",name:"USO Lounge",description:"Gathering lounge in Concourse J."}
  ]},
  MIA:{name:"Miami",resources:[
    {category:"physical",name:"Jetsetter Spa",description:"Spa services in Concourse H."},
    {category:"physical",name:"Minute Suites",description:"Nap rooms in Concourse D."},
    {category:"mental",name:"Prayer Room",description:"Quiet chapel in Concourse J."},
    {category:"mental",name:"Yoga Room",description:"Calming yoga space in Concourse H."},
    {category:"social",name:"American Admirals Club",description:"Crew lounge at Gate D30."},
    {category:"social",name:"Centurion Lounge",description:"Networking lounge at Gate D12."}
  ]},
  MUC:{name:"Munich",resources:[
    {category:"physical",name:"Hilton Fit & Fly Spa",description:"Spa and pool at Terminal 2."},
    {category:"physical",name:"Napcabs",description:"Sleep pods in Terminal 2."},
    {category:"mental",name:"Prayer Rooms",description:"Quiet chapels in Terminal 1."},
    {category:"mental",name:"Quiet Zones",description:"Rest areas in Terminal 2."},
    {category:"social",name:"Lufthansa Senator Lounge",description:"Crew lounge in Terminal 2."},
    {category:"social",name:"Airbräu",description:"Brewery and beer garden in the plaza."}
  ]},
  SEA:{name:"Seattle-Tacoma",resources:[
    {category:"physical",name:"XpresSpa",description:"Spa services in the N Concourse."},
    {category:"physical",name:"The Club at SEA Showers",description:"Shower suites in Concourse A."},
    {category:"mental",name:"Meditation Room",description:"Quiet room near A Gates."},
    {category:"mental",name:"Observation Deck",description:"Scenic lookout on top floor."},
    {category:"social",name:"Delta Sky Club",description:"Crew lounge in Concourse A."},
    {category:"social",name:"The Club at SEA",description:"Lounge in the S Concourse."}
  ]},
  FCO:{name:"Rome Fiumicino",resources:[
    {category:"physical",name:"HelloSky Lounge Showers",description:"Showers and day rooms in Terminal 1."},
    {category:"physical",name:"Plaza Premium Spa",description:"Spa treatments in Terminal 3."},
    {category:"mental",name:"Prayer Rooms",description:"Silent rooms in Terminal 3."},
    {category:"mental",name:"Art Exhibits",description:"Cultural displays in Terminal 3."},
    {category:"social",name:"Alitalia Lounge",description:"Crew lounge in Terminal 1."},
    {category:"social",name:"Plaza Premium Lounge",description:"Meeting space in Terminal 3."}
  ]},
  MAD:{name:"Madrid Barajas",resources:[
    {category:"physical",name:"Esenza by Sha Spa",description:"Spa services in Terminal 4."},
    {category:"physical",name:"Air Rooms",description:"Sleep rooms in Terminal 4."},
    {category:"mental",name:"Prayer Room",description:"Quiet chapel in Terminal 1."},
    {category:"mental",name:"Art Walk",description:"Art installations in Terminal 2."},
    {category:"social",name:"Iberia Premium Lounge",description:"Crew lounge in Terminal 4."},
    {category:"social",name:"Sala VIP Cibeles",description:"Lounge in Terminal 1."}
  ]},
  PHX:{name:"Phoenix Sky Harbor",resources:[
    {category:"physical",name:"XpresSpa",description:"Spa services near Gate B15."},
    {category:"physical",name:"FitPHX Walking Path",description:"Marked fitness route through terminals."},
    {category:"mental",name:"Chapel",description:"Prayer space in Terminal 4."},
    {category:"mental",name:"Quiet Room",description:"Calm room in Terminal 3."},
    {category:"social",name:"American Admirals Club",description:"Lounge near Gate A7."},
    {category:"social",name:"USO Lounge",description:"Gathering place in Terminal 4."}
  ]},
  IAH:{name:"Houston George Bush",resources:[
    {category:"physical",name:"XpresSpa",description:"Spa services at Gate C1."},
    {category:"physical",name:"Minute Suites",description:"Private rooms near Gate C14."},
    {category:"mental",name:"Interfaith Chapel",description:"Chapel near Gate C1."},
    {category:"mental",name:"Harmony in the Air",description:"Live music program in Terminal A."},
    {category:"social",name:"United Club",description:"Crew lounge near Gate E12."},
    {category:"social",name:"Centurion Lounge",description:"Networking space near Gate D1."}
  ]},
  SYD:{name:"Sydney",resources:[
    {category:"physical",name:"SkyTeam Wellness Spa",description:"Massage and showers in Terminal 1."},
    {category:"physical",name:"TravelXpress Showers",description:"Public shower facilities in Terminal 1."},
    {category:"mental",name:"Prayer Room",description:"Quiet chapel in Terminal 1."},
    {category:"mental",name:"Qantas Quiet Zones",description:"Low-noise seating in Terminal 1."},
    {category:"social",name:"Qantas Business Lounge",description:"Crew lounge in Terminal 1."},
    {category:"social",name:"Virgin Australia Lounge",description:"Lounge in Terminal 2."}
  ]},
  MEL:{name:"Melbourne",resources:[
    {category:"physical",name:"Premium Plaza Wellness Spa",description:"Spa treatments in Terminal 2."},
    {category:"physical",name:"Sleep Pods",description:"Rest pods in Terminal 2."},
    {category:"mental",name:"Prayer Room",description:"Quiet space in Terminal 2."},
    {category:"mental",name:"Observation Deck",description:"Viewing area in Terminal 2."},
    {category:"social",name:"Qantas Club",description:"Crew lounge in Terminal 1."},
    {category:"social",name:"Marhaba Lounge",description:"Meeting lounge in Terminal 2."}
  ]},
  BOM:{name:"Mumbai Chhatrapati Shivaji",resources:[
    {category:"physical",name:"O2 Spa",description:"Spa services in Terminal 2."},
    {category:"physical",name:"Niranta Transit Hotel",description:"Sleep rooms in Terminal 2."},
    {category:"mental",name:"Meditation Room",description:"Calm space in Terminal 2."},
    {category:"mental",name:"Prayer Room",description:"Quiet room in Terminal 1."},
    {category:"social",name:"GVK Lounge",description:"Premium lounge in Terminal 2."},
    {category:"social",name:"Loyalty Lounge",description:"Meeting lounge in Terminal 2."}
  ]},
  YYZ:{name:"Toronto Pearson",resources:[
    {category:"physical",name:"Be Relax Spa",description:"Spa treatments in Terminal 1."},
    {category:"physical",name:"GoodLife Fitness",description:"Gym in Terminal 1."},
    {category:"mental",name:"Interfaith Chapel",description:"Quiet space in Terminal 3."},
    {category:"mental",name:"Art Exhibits",description:"Public art throughout Terminal 1."},
    {category:"social",name:"Air Canada Maple Leaf Lounge",description:"Crew lounge in Terminal 1."},
    {category:"social",name:"Plaza Premium Lounge",description:"Lounge in Terminal 3."}
  ]},
  BCN:{name:"Barcelona El Prat",resources:[
    {category:"physical",name:"Aqua Salon & Spa",description:"Spa services in Terminal 1."},
    {category:"physical",name:"Sleep & Fly Hotel",description:"Day rooms in Terminal 1."},
    {category:"mental",name:"Prayer Room",description:"Quiet space in Terminal 1."},
    {category:"mental",name:"Quiet Area",description:"Rest area in Terminal 1."},
    {category:"social",name:"Sala VIP Miro",description:"Crew lounge in Terminal 1."},
    {category:"social",name:"Sala VIP Colomer",description:"Lounge in Terminal 1."}
  ]},
  SZX:{name:"Shenzhen Bao'an",resources:[
    {category:"physical",name:"Kingpower Spa",description:"Spa services in Terminal 3."},
    {category:"physical",name:"Sleeping Pods",description:"Rest pods in Terminal 3."},
    {category:"mental",name:"Prayer Room",description:"Quiet space in Terminal 3."},
    {category:"mental",name:"Reading Room",description:"Library area in Terminal 3."},
    {category:"social",name:"China Southern Lounge",description:"Crew lounge in Terminal 3."},
    {category:"social",name:"Shenzhen Airlines Lounge",description:"Lounge in Terminal 3."}
  ]},
  LGW:{name:"London Gatwick",resources:[
    {category:"physical",name:"No1 Lounges Spa",description:"Spa services in North Terminal."},
    {category:"physical",name:"Clubrooms Showers",description:"Shower facilities in South Terminal."},
    {category:"mental",name:"Prayer Room",description:"Silent room in South Terminal."},
    {category:"mental",name:"Sensory Room",description:"Low-stimulation space in North Terminal."},
    {category:"social",name:"No1 Lounge",description:"Lounge in North Terminal."},
    {category:"social",name:"Clubrooms",description:"Premium lounge in South Terminal."}
  ]},
  EWR:{name:"Newark Liberty",resources:[
    {category:"physical",name:"XpresSpa",description:"Spa services in Terminal C."},
    {category:"physical",name:"Minute Suites",description:"Nap rooms in Terminal A."},
    {category:"mental",name:"Interfaith Chapel",description:"Prayer space in Terminal A."},
    {category:"mental",name:"Art Gallery",description:"Public art in Terminal C."},
    {category:"social",name:"United Club",description:"Crew lounge near Gate C74."},
    {category:"social",name:"Art & Lounge",description:"Premium lounge in Terminal B."}
  ]},
  GRU:{name:"São Paulo-Guarulhos",resources:[
    {category:"physical",name:"L'Occitane Spa",description:"Spa treatments in Terminal 3."},
    {category:"physical",name:"Fast Sleep Center",description:"Sleep cabins in Terminal 2."},
    {category:"mental",name:"Prayer Room",description:"Quiet space in Terminal 3."},
    {category:"mental",name:"Relaxation Center",description:"Calming area in Terminal 2."},
    {category:"social",name:"LATAM Lounge",description:"Crew lounge in Terminal 3."},
    {category:"social",name:"American Admirals Club",description:"Lounge in Terminal 3."}
  ]},
  KUL:{name:"Kuala Lumpur",resources:[
    {category:"physical",name:"Wellness Spa",description:"Spa services in the Satellite Building."},
    {category:"physical",name:"Capsule by Container Hotel",description:"Sleep pods in the Satellite Building."},
    {category:"mental",name:"Prayer Room",description:"Silent rooms throughout the airport."},
    {category:"mental",name:"Quiet Zone",description:"Rest area in the Satellite Building."},
    {category:"social",name:"Golden Lounge",description:"Malaysia Airlines lounge in the Satellite Building."},
    {category:"social",name:"Plaza Premium Lounge",description:"Lounge in the Main Terminal."}
  ]},
  DOH:{name:"Hamad International",resources:[
    {category:"physical",name:"Vitality Wellbeing & Fitness Centre",description:"Gym and pool in Concourse C."},
    {category:"physical",name:"Sleep Pods",description:"Rest pods in Concourse D."},
    {category:"mental",name:"Prayer Room",description:"Quiet room in Concourse C."},
    {category:"mental",name:"Quiet Room",description:"Low-noise room in Concourse B."},
    {category:"social",name:"Al Mourjan Lounge",description:"Premium lounge in Concourse C."},
    {category:"social",name:"Oryx Lounge",description:"Meeting lounge in Concourse B."}
  ]},
  BOG:{name:"Bogotá El Dorado",resources:[
    {category:"physical",name:"El Dorado Spa",description:"Spa services in Terminal 2."},
    {category:"physical",name:"BOG Travelers Lounge Showers",description:"Shower access in Terminal 1."},
    {category:"mental",name:"Prayer Room",description:"Silent room in Terminal 1."},
    {category:"mental",name:"Cultural Exhibition",description:"Art displays in Terminal 1."},
    {category:"social",name:"Avianca Lounge",description:"Crew lounge in Terminal 1."},
    {category:"social",name:"El Dorado Lounge",description:"Meeting lounge in Terminal 1."}
  ]},
  SLC:{name:"Salt Lake City",resources:[
    {category:"physical",name:"XpresSpa",description:"Spa services in Concourse A."},
    {category:"physical",name:"Walking Path",description:"Marked fitness route through Concourse B."},
    {category:"mental",name:"Interfaith Chapel",description:"Quiet chapel in Concourse B."},
    {category:"mental",name:"Observation Deck",description:"Viewing area atop the terminal."},
    {category:"social",name:"Delta Sky Club",description:"Crew lounge in Concourse A."},
    {category:"social",name:"USO Lounge",description:"Gathering lounge in Concourse A."}
  ]},
  BOS:{name:"Boston Logan",resources:[
    {category:"physical",name:"XpresSpa",description:"Spa services near Gate C12."},
    {category:"physical",name:"The Club Shower Suite",description:"Shower access in Terminal E."},
    {category:"mental",name:"Interfaith Chapel",description:"Quiet chapel in Terminal C."},
    {category:"mental",name:"Art Exhibits",description:"Public art around Terminal B."},
    {category:"social",name:"United Club",description:"Crew lounge in Terminal B."},
    {category:"social",name:"The Lounge BOS",description:"Meeting lounge in Terminal C."}
  ]},
  MSP:{name:"Minneapolis–Saint Paul",resources:[
    {category:"physical",name:"XpresSpa",description:"Spa services near Gate F6."},
    {category:"physical",name:"Minute Suites",description:"Nap rooms near Gate C11."},
    {category:"mental",name:"Interfaith Chapel",description:"Quiet room near Gate E1."},
    {category:"mental",name:"Art Gallery",description:"Calming exhibits on Concourse C."},
    {category:"social",name:"Delta Sky Club",description:"Crew lounge near Gate F1."},
    {category:"social",name:"PGA MSP Lounge",description:"Golf-themed lounge in Concourse E."}
  ]},
  DTW:{name:"Detroit",resources:[
    {category:"physical",name:"Be Relax Spa",description:"Spa near Gate A18."},
    {category:"physical",name:"Westin Workout",description:"Gym and pool at the Westin Detroit Hotel."},
    {category:"mental",name:"Interfaith Chapel",description:"Quiet chapel near Gate A38."},
    {category:"mental",name:"Light Tunnel",description:"Color therapy walkway between concourses."},
    {category:"social",name:"Delta Sky Club",description:"Crew lounge near Gate A43."},
    {category:"social",name:"Lufthansa Lounge",description:"Meeting lounge in the North Terminal."}
  ]},
  NRT:{name:"Tokyo Narita",resources:[
    {category:"physical",name:"Raffine Massage",description:"Massage chairs in Terminal 1."},
    {category:"physical",name:"Nap Rooms",description:"Rest rooms in Terminal 2."},
    {category:"mental",name:"Prayer Rooms",description:"Silent rooms in Terminal 2."},
    {category:"mental",name:"Observation Deck",description:"Outdoor deck in Terminal 1."},
    {category:"social",name:"Narita TraveLounge",description:"Casual meeting space in Terminal 1."},
    {category:"social",name:"ANA Lounge",description:"Crew lounge in Terminal 1."}
  ]},
  ZRH:{name:"Zurich",resources:[
    {category:"physical",name:"Airport Fitness and Wellness",description:"Gym and spa near Check-in 2."},
    {category:"physical",name:"Transit Hotel",description:"Day rooms in Airside Center."},
    {category:"mental",name:"Prayer Room",description:"Quiet chapel in the Airside Center."},
    {category:"mental",name:"Quiet Room",description:"Relaxation area in Dock E."},
    {category:"social",name:"Swiss Business Lounge",description:"Crew lounge in Terminal A."},
    {category:"social",name:"Aspire Lounge",description:"Lounge in Terminal E."}
  ]},
  BWI:{name:"Baltimore/Washington",resources:[
    {category:"physical",name:"Roam Fitness",description:"Gym with showers in Concourse D."},
    {category:"physical",name:"XpresSpa",description:"Spa services in Concourse A/B."},
    {category:"mental",name:"Meditation Room",description:"Quiet room in Concourse C."},
    {category:"mental",name:"Observation Gallery",description:"Relaxing viewing area landside."},
    {category:"social",name:"The Club BWI",description:"Lounge in Concourse D."},
    {category:"social",name:"Chesapeake Club Lounge",description:"Crew lounge in Concourse E."}
  ]}
};

const airportSelect=document.getElementById("airport-select");
const categorySelect=document.getElementById("category-select");
const results=document.getElementById("results");

Object.entries(data).forEach(([code,info])=>{
  const opt=document.createElement("option");
  opt.value=code;
  opt.textContent=`${code} – ${info.name}`;
  airportSelect.appendChild(opt);
});

function render(){
  const airport=airportSelect.value;
  const category=categorySelect.value;
  results.innerHTML="";
  if(!airport||!category)return;
  const resources=data[airport].resources.filter(r=>r.category===category);
  if(resources.length===0){
    results.innerHTML="<p>No resources found for this selection.</p>";
    return;
  }
  const list=document.createElement("ul");
  resources.forEach(r=>{
    const item=document.createElement("li");
    const title=document.createElement("h3");
    title.textContent=r.name;
    const desc=document.createElement("p");
    desc.textContent=r.description;
    item.appendChild(title);
    item.appendChild(desc);
    list.appendChild(item);
  });
  results.appendChild(list);
}

airportSelect.addEventListener("change",render);
categorySelect.addEventListener("change",render);