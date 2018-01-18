var roomArray = [
	{
	 title:"Wake Up",
	 text:"You wake up in your room, a simple studio with little to no decoration, only dusty tomes and scrolls litter your floor. Outside your window the bustling city of Fortitude is awake with the sound of progress, factories producing everything from rough wool to fine silk, the rich in their mechanical carriages riding alonside horse and carriage, a city where crime is rampant and revolution is on the minds of everyone. You awake to the news of a murder, a murder of a high ranking official. As Head Detective of the Magisterium, you head to scene to investigate.",
	 choices:[
		 {
			 text:'Make haste to the crime scene.',
			 index:1
		 }
 ]
 },
	{
		title:"Murder Scene",
		text:"You arrive at the scene of the murder of Lord Magister Kirkland. Here you can instantly see the gruesome details of his demise. Upon investigation you notice many clues, including the black powder residue on the victim's coat, the bloody handprint on the window, as well as an eye witness seeing the murderer flee the seen.",
		choices:[
			{
				text:'View the blackpowder.',
				index:2
			},
      {
        text:'Investigate the blood.',
        index: 3
      },
      {
        text:'Speak to the eye witness.',
        index: 4
      }
		]
	},
	{
		title:"Murder Scene - Black Powder",
		text:"Upon investigation of the powder, you instantly recognise it as the unique blend used by the local smithy.",
		choices:[
			{
				text:'Return to the scene.',
				index:1
			},
			{
				text:'Meet the smithy.',
				index:5
			}
		]
	},
	{
		title:"Murder Scene - Blood",
		text:"You decide to look at the handprint. The blood is fresher than that of the victim. This must be the blood of the murderer.",
		choices:[
			{
				text:'Return to the scene.',
				index:1
			},
			{
				text:'Take a sample to the Blood Bank.',
				index:6
			}
		]
	},
	{
		title:"Murder Scene - Eyewitness",
		text:"You go to talk to the eye witness. The police inform you that she only saw the murderer flee the scene. However you can tell she is hiding more information than she told the officers.",
		choices:[
			{
				text:'Return to the scene.',
				index:1
			},
			{
				text:'Talk to the eye witness.',
				index:7
			}
		]
	},
	{
		title:"Smithy",
		text:"You go to meet the smithy and show him the powder found at the scene. He tells you that only one person has bought that strain recently and gives you their details.",
		choices:[
			{
				text:'Investigate the weapon owner.',
				index:8
			}
		]
	},
	{
		title:"Blood Bank",
		text:"You arrive at the blood bank with a small sample collected from the murder scene. Here the blood of every citizen in the district is stored as a way to identify them in outstanding circumstances. The blood minister takes the sample and begins to break it down to identify the person it belongs to. This is a lengthy process. Multiple hours pass and the minister approaches you with a new vial of blood, the blood of the key suspect. You see his name is Herlio Loss, a man affiliated with the state revolutionaries.",
		choices:[
			{
				text:"Head to Herlio's Apartment.",
				index:9
			},
			{
				text:'Go to a revolutionary politician to inform them on the current situation.',
				index:10
			}
		]
	},
	{
		title:"Witness' Apartment",
		text:"The witness lives across the hall from the victim. She is an elderly women, a member of the Old Maidens, a religious order of female scholars. The woman tells you of the shadow of a man she saw fleeing the scene. He was a large built man with a distinguishing limp. You move through files you have on hand to identify known criminals with this feature, and while the tedious task takes time the women interrupts you. In a hushed voice she tells you of a revolutionary who will help you in your cause to catch the killer. She gives you an address.",
		choices:[
			{
				text:'Following the given information you decide to raid the contact with a small police force.',
				index:11
			},
			{
				text:'Following the given information you decide to approach the contact peacefully.',
				index:10
			}
		]
	},
	{
		title:"Weapon Owner",
		text:"You go to the owner of the powder, he lives in the outer section of the district. When he sees you approaching you can recognise the fear on his face, most men have this reaction when you approach. You calmly explain to him that you have found black powder residue at a murder scene and that they have traced the use of that specific powder back to him. The man straightens up, his fear turns to concern and he informs you that his hand cannon was stolen a week prior, and that he has reported it twice to his local officers. You wonder how this information slipped past you. However the man then goes on to tell you that he knows who stole it, his brother, a known revolutionary politician.",
		choices:[
			{
				text:'Following the given information you decide to raid the politician with a small police force.',
				index:11
			},
			{
				text:'Following the given information you decide to approach the politician peacefully.',
				index:10
			}
		]
	},
	{
		title:"Herlio's Apartment",
		text:"You arrive at Herlio's Apartment and find the door open. On the inside it is well lit, unusual in the housing in this part of the district. There appears to be a lot of decor, paintings, statues, and other expensive tastes. Amongst the clutter of his belongings are numerous documents. After scouting his home and not finding Herlio you decide to look through the documents. There you find his journal. Following a quick read through you find a detailed plan indicting Herlio and an accomplice, a man by the name of Sebastian, to the the murder of the Magister. You still don't know the whereabouts of Herlio but the journal states the location of Sebastian.",
		choices:[
			{
				text:'Capture Sebastian.',
				index:12
			},
			{
				text:'Contact and meet Sebastian.',
				index:10
			}
		]
	},
	{
		title:"Revolution",
		text:"After a long time walking through the edge of the district you finally meet the politician, Sebastian, or at least that is the name he goes by. You talk to him for sometime, discussing the situation and finding out as much information as you can. Sebastian tells you of his involvement in the murder, information not shared lightly to a person of your position. He begins to tell you of the grand plot involving the downfall of the government and the rise of the Revolution. You can tell he is no threat to you, but question why he is telling you this information, to which he replies that the revolutionaries need your help in this plot.",
		choices:[
			{
				text:'Help the revolution.',
				index:13
			},
			{
				text:'Interrogate Sebastian and find the whereabouts of Herlio.',
				index:14
			}
		]
	},
	{
		title:"The Raid",
		text:"You and a large force of officers storm the location of the politician, Sebastian. During the raid many revolutionaries are killed, more are detained and you finally apprehend Sebastian. There's no need to take him in to interrogate him, you do it right here in front of his men. After a couple of hours of brutal and relentless torture he finally cracks and gives you all the information he has on Herlio's whereabouts..",
		choices:[
			{
				text:'Capture Herlio.',
				index:14
			}
		]
	},
	{
		title:"The Capture of Sebastian",
		text:"After discovering the location of Sebastian from Herlio's journal you quickly find and apprehend him. Here you find out that Sebastian is a well known revolutionary politician. Indicting his involvement in the crime would surely damage the revolution and its position in society. Once Sebastian is tied down and ready to be interrogated, you are prepared at doing anything to divulge information from him.",
		choices:[
			{
				text:'Torture Him.',
				index:14
			}
		]
	},
	{
		title:"Revolutionary",
		text:"After being thoroughly convinced by Sebastian, you decide to turn your eye on bringing down the government. It occurs to you that many of the people you have associated with were all revolutionaries and aimed at leading you down this path to topple your previous employers. While justice will not be served for the murder of the Magister, you know that this is the right option. Or is it?",
		choices:[
			{
				text:'Wake up',
				index:0
			}
		]
	},
	{
		title:"The Capture of Herlio",
		text:"After divulging the information from Sebastian, you manage to find Herlio and swiftly deliver justice upon him. You take him in, he is brutalised by numerous officials and faces a fate worse than death. Following evidence given by Sebastian as well as evidence collected from the numerous witnesses and clues you've found, you assure Herlio that he will be given the worst possible sentence. He will face years of physical abuse, mental torture and after he finally cracks and wishes death, he will be let go, and be unable to die for years to come. An eternity of pain delivered by you.",
		choices:[
			{
				text:'Wake up',
				index:0
			}
		]
	}
]
