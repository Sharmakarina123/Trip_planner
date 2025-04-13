const mockData = {
    // Indian Cities/States
    "new delhi": {
        places: {
            short: [
                { name: "India Gate", map: "https://www.google.com/maps/search/?api=1&query=India+Gate+New+Delhi", desc: "Iconic war memorial" },
                { name: "Lotus Temple", map: "https://www.google.com/maps/search/?api=1&query=Lotus+Temple+New+Delhi", desc: "Bahá'í House of Worship" },
                { name: "Qutub Minar", map: "https://www.google.com/maps/search/?api=1&query=Qutub+Minar+New+Delhi", desc: "UNESCO World Heritage Site" },
                { name: "Red Fort", map: "https://www.google.com/maps/search/?api=1&query=Red+Fort+New+Delhi", desc: "Mughal-era fort" },
                { name: "Humayun's Tomb", map: "https://www.google.com/maps/search/?api=1&query=Humayun+Tomb+New+Delhi", desc: "Mughal architecture marvel" }
            ],
            medium: [
                { name: "Akshardham Temple", map: "https://www.google.com/maps/search/?api=1&query=Akshardham+Temple+New+Delhi", desc: "Modern Hindu temple complex" },
                { name: "National Museum", map: "https://www.google.com/maps/search/?api=1&query=National+Museum+New+Delhi", desc: "Indian history repository" },
                { name: "Lodhi Gardens", map: "https://www.google.com/maps/search/?api=1&query=Lodhi+Gardens+New+Delhi", desc: "Historic city park" },
                { name: "Chandni Chowk", map: "https://www.google.com/maps/search/?api=1&query=Chandni+Chowk+New+Delhi", desc: "Historic shopping district" }
            ],
            long: [
                { name: "National Rail Museum", map: "https://www.google.com/maps/search/?api=1&query=National+Rail+Museum+New+Delhi", desc: "Railway heritage museum" },
                { name: "Dilli Haat", map: "https://www.google.com/maps/search/?api=1&query=Dilli+Haat+New+Delhi", desc: "Traditional craft bazaar" },
                { name: "Garden of Five Senses", map: "https://www.google.com/maps/search/?api=1&query=Garden+of+Five+Senses+New+Delhi", desc: "Landscape garden" },
                { name: "Sunder Nursery", map: "https://www.google.com/maps/search/?api=1&query=Sunder+Nursery+New+Delhi", desc: "16th-century heritage park" }
            ]
        },
        hotels: {
            budget: [
                { name: "Hotel Palace Heights", map: "https://www.google.com/maps/search/?api=1&query=Hotel+Palace+Heights+New+Delhi", price: "₹1,800/night", rating: "3.8" },
                { name: "Zostel Delhi", map: "https://www.google.com/maps/search/?api=1&query=Zostel+Delhi", price: "₹1,200/night", rating: "4.2" }
            ],
            luxury: [
                { name: "The Leela Palace", map: "https://www.google.com/maps/search/?api=1&query=Leela+Palace+New+Delhi", price: "₹25,000/night", rating: "5" },
                { name: "Taj Diplomatic Enclave", map: "https://www.google.com/maps/search/?api=1&query=Taj+Diplomatic+Enclave+New+Delhi", price: "₹35,000/night", rating: "5" }
            ]
        }
    },

    "rajasthan": {
        places: {
            short: [
                { name: "Amber Fort, Jaipur", map: "https://www.google.com/maps/search/?api=1&query=Amber+Fort+Jaipur", desc: "Hilltop fort complex" },
                { name: "Hawa Mahal", map: "https://www.google.com/maps/search/?api=1&query=Hawa+Mahal+Jaipur", desc: "Palace of Winds" },
                { name: "City Palace, Udaipur", map: "https://www.google.com/maps/search/?api=1&query=City+Palace+Udaipur", desc: "Lake Pichola palace" },
                { name: "Jaisalmer Fort", map: "https://www.google.com/maps/search/?api=1&query=Jaisalmer+Fort+Rajasthan", desc: "Golden sandstone fortress" },
                { name: "Ranthambore National Park", map: "https://www.google.com/maps/search/?api=1&query=Ranthambore+National+Park+Rajasthan", desc: "Tiger reserve" }
            ],
            medium: [
                { name: "Jantar Mantar, Jaipur", map: "https://www.google.com/maps/search/?api=1&query=Jantar+Mantar+Jaipur", desc: "Astronomical observatory" },
                { name: "Pushkar Lake", map: "https://www.google.com/maps/search/?api=1&query=Pushkar+Lake+Rajasthan", desc: "Sacred Hindu site" },
                { name: "Kumbhalgarh Fort", map: "https://www.google.com/maps/search/?api=1&query=Kumbhalgarh+Fort+Rajasthan", desc: "World's second-longest wall" },
                { name: "Mehrangarh Fort, Jodhpur", map: "https://www.google.com/maps/search/?api=1&query=Mehrangarh+Fort+Jodhpur", desc: "Massive 15th-century fort" }
            ],
            long: [
                { name: "Chittorgarh Fort", map: "https://www.google.com/maps/search/?api=1&query=Chittorgarh+Fort+Rajasthan", desc: "Largest fort in India" },
                { name: "Bundi Stepwells", map: "https://www.google.com/maps/search/?api=1&query=Bundi+Stepwells+Rajasthan", desc: "Ancient water reservoirs" },
                { name: "Keoladeo National Park", map: "https://www.google.com/maps/search/?api=1&query=Keoladeo+National+Park+Rajasthan", desc: "UNESCO World Heritage Site" },
                { name: "Dilwara Temples", map: "https://www.google.com/maps/search/?api=1&query=Dilwara+Temples+Rajasthan", desc: "Jain marble temples" }
            ]
        },
        hotels: {
            budget: [
                { name: "Zostel Jaisalmer", map: "https://www.google.com/maps/search/?api=1&query=Zostel+Jaisalmer", price: "₹1,500/night", rating: "4.3" },
                { name: "Hotel Pearl Palace", map: "https://www.google.com/maps/search/?api=1&query=Hotel+Pearl+Palace+Jaipur", price: "₹3,000/night", rating: "4.1" }
            ],
            luxury: [
                { name: "Taj Lake Palace", map: "https://www.google.com/maps/search/?api=1&query=Taj+Lake+Palace+Udaipur", price: "₹45,000/night", rating: "5" },
                { name: "Umaid Bhawan Palace", map: "https://www.google.com/maps/search/?api=1&query=Umaid+Bhawan+Palace+Jodhpur", price: "₹75,000/night", rating: "5" }
            ]
        }
    },

    // Other Locations (continued in this pattern)
        // INDIAN CITIES/STATES
        "mumbai": {
            places: {
                short: [
                    { name: "Gateway of India", map: "https://www.google.com/maps/search/?api=1&query=Gateway+of+India+Mumbai", desc: "Historic arch monument" },
                    { name: "Marine Drive", map: "https://www.google.com/maps/search/?api=1&query=Marine+Drive+Mumbai", desc: "3km coastal promenade" },
                    { name: "Elephanta Caves", map: "https://www.google.com/maps/search/?api=1&query=Elephanta+Caves", desc: "UNESCO rock-cut temples" },
                    { name: "Chhatrapati Shivaji Terminus", map: "https://www.google.com/maps/search/?api=1&query=Chhatrapati+Shivaji+Terminus", desc: "Victorian Gothic station" },
                    { name: "Haji Ali Dargah", map: "https://www.google.com/maps/search/?api=1&query=Haji+Ali+Dargah", desc: "Offshore Islamic shrine" }
                ],
                medium: [
                    { name: "Sanjay Gandhi National Park", map: "https://www.google.com/maps/search/?api=1&query=Sanjay+Gandhi+National+Park", desc: "Urban wilderness area" },
                    { name: "Juhu Beach", map: "https://www.google.com/maps/search/?api=1&query=Juhu+Beach+Mumbai", desc: "Famous beach with street food" },
                    { name: "Dhobi Ghat", map: "https://www.google.com/maps/search/?api=1&query=Dhobi+Ghat+Mumbai", desc: "World's largest open-air laundry" },
                    { name: "Bandra-Worli Sea Link", map: "https://www.google.com/maps/search/?api=1&query=Bandra+Worli+Sea+Link", desc: "Engineering marvel bridge" }
                ],
                long: [
                    { name: "Global Vipassana Pagoda", map: "https://www.google.com/maps/search/?api=1&query=Global+Vipassana+Pagoda", desc: "Golden meditation dome" },
                    { name: "Kanheri Caves", map: "https://www.google.com/maps/search/?api=1&query=Kanheri+Caves", desc: "Ancient Buddhist complex" },
                    { name: "Essel World", map: "https://www.google.com/maps/search/?api=1&query=Essel+World+Mumbai", desc: "Amusement park" },
                    { name: "Mani Bhavan Gandhi Museum", map: "https://www.google.com/maps/search/?api=1&query=Mani+Bhavan+Gandhi+Museum", desc: "Gandhi's Mumbai residence" }
                ]
            },
            hotels: {
                budget: [
                    { name: "Hotel City Palace", map: "https://www.google.com/maps/search/?api=1&query=Hotel+City+Palace+Mumbai", price: "₹1,800/night", rating: "3.9" },
                    { name: "Backpacker Panda", map: "https://www.google.com/maps/search/?api=1&query=Backpacker+Panda+Mumbai", price: "₹1,500/night", rating: "4.0" }
                ],
                luxury: [
                    { name: "Taj Mahal Palace", map: "https://www.google.com/maps/search/?api=1&query=Taj+Mahal+Palace+Mumbai", price: "₹30,000/night", rating: "5" },
                    { name: "The St. Regis", map: "https://www.google.com/maps/search/?api=1&query=St+Regis+Mumbai", price: "₹45,000/night", rating: "5" }
                ]
            }
        },
    
        "goa": {
            places: {
                short: [
                    { name: "Basilica of Bom Jesus", map: "https://www.google.com/maps/search/?api=1&query=Basilica+of+Bom+Jesus+Goa", desc: "UNESCO World Heritage Site" },
                    { name: "Palolem Beach", map: "https://www.google.com/maps/search/?api=1&query=Palolem+Beach+Goa", desc: "Scenic crescent-shaped beach" },
                    { name: "Dudhsagar Waterfalls", map: "https://www.google.com/maps/search/?api=1&query=Dudhsagar+Waterfalls", desc: "Four-tiered waterfall" },
                    { name: "Fort Aguada", map: "https://www.google.com/maps/search/?api=1&query=Fort+Aguada+Goa", desc: "17th-century Portuguese fort" },
                    { name: "Anjuna Flea Market", map: "https://www.google.com/maps/search/?api=1&query=Anjuna+Flea+Market", desc: "Famous Wednesday market" }
                ],
                medium: [
                    { name: "Divar Island", map: "https://www.google.com/maps/search/?api=1&query=Divar+Island+Goa", desc: "Quaint riverside villages" },
                    { name: "Mangeshi Temple", map: "https://www.google.com/maps/search/?api=1&query=Mangeshi+Temple+Goa", desc: "18th-century Hindu temple" },
                    { name: "Salim Ali Bird Sanctuary", map: "https://www.google.com/maps/search/?api=1&query=Salim+Ali+Bird+Sanctuary", desc: "Mangrove ecosystem" },
                    { name: "Cabo de Rama Fort", map: "https://www.google.com/maps/search/?api=1&query=Cabo+de+Rama+Fort", desc: "Clifftop Portuguese ruins" }
                ],
                long: [
                    { name: "Bhagwan Mahavir Sanctuary", map: "https://www.google.com/maps/search/?api=1&query=Bhagwan+Mahavir+Sanctuary", desc: "Wildlife sanctuary" },
                    { name: "Spice Plantations", map: "https://www.google.com/maps/search/?api=1&query=Goa+Spice+Plantations", desc: "Tropical spice farms" },
                    { name: "Naval Aviation Museum", map: "https://www.google.com/maps/search/?api=1&query=Naval+Aviation+Museum+Goa", desc: "Aircraft exhibits" },
                    { name: "Butterfly Conservatory", map: "https://www.google.com/maps/search/?api=1&query=Butterfly+Conservatory+Goa", desc: "Exotic butterfly species" }
                ]
            },
            hotels: {
                budget: [
                    { name: "The Hostel Crowd", map: "https://www.google.com/maps/search/?api=1&query=The+Hostel+Crowd+Goa", price: "₹1,200/night", rating: "4.2" },
                    { name: "Hotel Sea View", map: "https://www.google.com/maps/search/?api=1&query=Hotel+Sea+View+Goa", price: "₹2,500/night", rating: "3.8" }
                ],
                luxury: [
                    { name: "Taj Exotica Resort", map: "https://www.google.com/maps/search/?api=1&query=Taj+Exotica+Goa", price: "₹35,000/night", rating: "5" },
                    { name: "The Leela Goa", map: "https://www.google.com/maps/search/?api=1&query=Leela+Goa", price: "₹40,000/night", rating: "5" }
                ]
            }
        },
    
        // INTERNATIONAL CITIES
        "paris": {
            places: {
                short: [
                    { name: "Eiffel Tower", map: "https://www.google.com/maps/search/?api=1&query=Eiffel+Tower", desc: "Iconic iron lattice tower" },
                    { name: "Louvre Museum", map: "https://www.google.com/maps/search/?api=1&query=Louvre+Museum", desc: "World's largest art museum" },
                    { name: "Notre-Dame Cathedral", map: "https://www.google.com/maps/search/?api=1&query=Notre+Dame+Cathedral+Paris", desc: "Medieval Catholic cathedral" },
                    { name: "Arc de Triomphe", map: "https://www.google.com/maps/search/?api=1&query=Arc+de+Triomphe", desc: "Historic triumphal arch" },
                    { name: "Montmartre", map: "https://www.google.com/maps/search/?api=1&query=Montmartre+Paris", desc: "Artistic hilltop neighborhood" }
                ],
                medium: [
                    { name: "Sainte-Chapelle", map: "https://www.google.com/maps/search/?api=1&query=Sainte+Chapelle+Paris", desc: "Gothic royal chapel" },
                    { name: "Musée d'Orsay", map: "https://www.google.com/maps/search/?api=1&query=Musee+dOrsay", desc: "Impressionist art museum" },
                    { name: "Luxembourg Gardens", map: "https://www.google.com/maps/search/?api=1&query=Luxembourg+Gardens+Paris", desc: "23-hectare formal garden" },
                    { name: "Palais Garnier", map: "https://www.google.com/maps/search/?api=1&query=Palais+Garnier", desc: "Opulent opera house" }
                ],
                long: [
                    { name: "Catacombs of Paris", map: "https://www.google.com/maps/search/?api=1&query=Catacombs+of+Paris", desc: "Underground ossuaries" },
                    { name: "Père Lachaise Cemetery", map: "https://www.google.com/maps/search/?api=1&query=Pere+Lachaise+Cemetery", desc: "Final resting place of celebrities" },
                    { name: "La Défense", map: "https://www.google.com/maps/search/?api=1&query=La+Defense+Paris", desc: "Modern business district" },
                    { name: "Canal Saint-Martin", map: "https://www.google.com/maps/search/?api=1&query=Canal+Saint+Martin+Paris", desc: "Picturesque 4.5km canal" }
                ]
            },
            hotels: {
                budget: [
                    { name: "Ibis Paris Centre", map: "https://www.google.com/maps/search/?api=1&query=Ibis+Paris+Centre", price: "₹18,000/night", rating: "4.0" },
                    { name: "Hotel Eiffel Turenne", map: "https://www.google.com/maps/search/?api=1&query=Hotel+Eiffel+Turenne+Paris", price: "₹15,000/night", rating: "3.9" }
                ],
                luxury: [
                    { name: "Hôtel Plaza Athénée", map: "https://www.google.com/maps/search/?api=1&query=Plaza+Athenee+Paris", price: "₹1,50,000/night", rating: "5" },
                    { name: "The Ritz Paris", map: "https://www.google.com/maps/search/?api=1&query=Ritz+Paris", price: "₹1,20,000/night", rating: "5" }
                ]
            }
        },
    
        // ... [Similar detailed entries for London, Tokyo, Agra, Jammu & Kashmir, Maharashtra]
            "agra": {
                places: {
                    short: [
                        { name: "Taj Mahal", map: "https://www.google.com/maps/search/?api=1&query=Taj+Mahal+Agra", desc: "White marble mausoleum, UNESCO World Heritage Site" },
                        { name: "Agra Fort", map: "https://www.google.com/maps/search/?api=1&query=Agra+Fort", desc: "16th-century Mughal fortress" },
                        { name: "Mehtab Bagh", map: "https://www.google.com/maps/search/?api=1&query=Mehtab+Bagh+Agra", desc: "Moonlight Garden with Taj views" },
                        { name: "Itimad-ud-Daulah's Tomb", map: "https://www.google.com/maps/search/?api=1&query=Itimad+ud+Daulah+Tomb", desc: "Baby Taj architectural marvel" },
                        { name: "Kinari Bazaar", map: "https://www.google.com/maps/search/?api=1&query=Kinari+Bazaar+Agra", desc: "Traditional market near Taj Mahal" }
                    ],
                    medium: [
                        { name: "Fatehpur Sikri", map: "https://www.google.com/maps/search/?api=1&query=Fatehpur+Sikri", desc: "Abandoned Mughal city" },
                        { name: "Akbar's Tomb", map: "https://www.google.com/maps/search/?api=1&query=Akbar's+Tomb+Sikandra", desc: "Emperor Akbar's mausoleum" },
                        { name: "Jama Masjid", map: "https://www.google.com/maps/search/?api=1&query=Jama+Masjid+Agra", desc: "17th-century congregational mosque" },
                        { name: "Soami Bagh Samadh", map: "https://www.google.com/maps/search/?api=1&query=Soami+Bagh+Samadh", desc: "Radha Soami sect headquarters" }
                    ],
                    long: [
                        { name: "Mankameshwar Temple", map: "https://www.google.com/maps/search/?api=1&query=Mankameshwar+Temple+Agra", desc: "Ancient Shiva temple" },
                        { name: "Wildlife SOS Bear Rescue", map: "https://www.google.com/maps/search/?api=1&query=Wildlife+SOS+Agra", desc: "Sloth bear conservation center" },
                        { name: "Taj Nature Walk", map: "https://www.google.com/maps/search/?api=1&query=Taj+Nature+Walk", desc: "70-acre biodiversity park" },
                        { name: "Mughal Heritage Walk", map: "https://www.google.com/maps/search/?api=1&query=Mughal+Heritage+Walk+Agra", desc: "1km historical pathway" }
                    ]
                },
                hotels: {
                    budget: [
                        { name: "Hotel Kamal", map: "https://www.google.com/maps/search/?api=1&query=Hotel+Kamal+Agra", price: "₹1,200/night", rating: "3.9" },
                        { name: "Zostel Agra", map: "https://www.google.com/maps/search/?api=1&query=Zostel+Agra", price: "₹900/night", rating: "4.3" }
                    ],
                    luxury: [
                        { name: "The Oberoi Amarvilas", map: "https://www.google.com/maps/search/?api=1&query=Oberoi+Amarvilas+Agra", price: "₹45,000/night", rating: "5" },
                        { name: "ITC Mughal", map: "https://www.google.com/maps/search/?api=1&query=ITC+Mughal+Agra", price: "₹35,000/night", rating: "5" }
                    ]
                }
            },
        
            "jammu and kashmir": {
                places: {
                    short: [
                        { name: "Dal Lake", map: "https://www.google.com/maps/search/?api=1&query=Dal+Lake+Srinagar", desc: "Famous urban lake with houseboats" },
                        { name: "Gulmarg Gondola", map: "https://www.google.com/maps/search/?api=1&query=Gulmarg+Gondola", desc: "World's second-highest cable car" },
                        { name: "Sonamarg", map: "https://www.google.com/maps/search/?api=1&query=Sonamarg+Jammu+and+Kashmir", desc: "Meadow of Gold mountain valley" },
                        { name: "Shankaracharya Temple", map: "https://www.google.com/maps/search/?api=1&query=Shankaracharya+Temple+Srinagar", desc: "Ancient hilltop Shiva temple" },
                        { name: "Nishat Bagh", map: "https://www.google.com/maps/search/?api=1&query=Nishat+Bagh+Srinagar", desc: "Mughal terraced garden" }
                    ],
                    medium: [
                        { name: "Betaab Valley", map: "https://www.google.com/maps/search/?api=1&query=Betaab+Valley", desc: "Picturesque valley in Pahalgam" },
                        { name: "Pari Mahal", map: "https://www.google.com/maps/search/?api=1&query=Pari+Mahal+Srinagar", desc: "17th-century garden palace" },
                        { name: "Vaishno Devi Temple", map: "https://www.google.com/maps/search/?api=1&query=Vaishno+Devi+Temple", desc: "Hindu shrine in Trikuta Hills" },
                        { name: "Hemis National Park", map: "https://www.google.com/maps/search/?api=1&query=Hemis+National+Park", desc: "High-altitude wildlife reserve" }
                    ],
                    long: [
                        { name: "Dachigam National Park", map: "https://www.google.com/maps/search/?api=1&query=Dachigam+National+Park", desc: "Last refuge of Kashmir stag" },
                        { name: "Thajiwas Glacier", map: "https://www.google.com/maps/search/?api=1&query=Thajiwas+Glacier", desc: "Seasonal glacier near Sonamarg" },
                        { name: "Apharwat Peak", map: "https://www.google.com/maps/search/?api=1&query=Apharwat+Peak", desc: "High mountain peak in Gulmarg" },
                        { name: "Mantalai Lake", map: "https://www.google.com/maps/search/?api=1&query=Mantalai+Lake", desc: "Alpine lake trekking destination" }
                    ]
                },
                hotels: {
                    budget: [
                        { name: "Hotel Pine View", map: "https://www.google.com/maps/search/?api=1&query=Hotel+Pine+View+Gulmarg", price: "₹2,500/night", rating: "4.0" },
                        { name: "Zostel Pahalgam", map: "https://www.google.com/maps/search/?api=1&query=Zostel+Pahalgam", price: "₹1,800/night", rating: "4.5" }
                    ],
                    luxury: [
                        { name: "The Lalit Grand Palace", map: "https://www.google.com/maps/search/?api=1&query=Lalit+Grand+Palace+Srinagar", price: "₹25,000/night", rating: "5" },
                        { name: "Taj Vivanta Dal View", map: "https://www.google.com/maps/search/?api=1&query=Taj+Vivanta+Dal+View", price: "₹35,000/night", rating: "5" }
                    ]
                }
            },
        
            // INTERNATIONAL CITIES
            "london": {
                places: {
                    short: [
                        { name: "Tower of London", map: "https://www.google.com/maps/search/?api=1&query=Tower+of+London", desc: "Historic castle & Crown Jewels" },
                        { name: "British Museum", map: "https://www.google.com/maps/search/?api=1&query=British+Museum", desc: "World culture history museum" },
                        { name: "Buckingham Palace", map: "https://www.google.com/maps/search/?api=1&query=Buckingham+Palace", desc: "Royal residence & Changing Guard" },
                        { name: "London Eye", map: "https://www.google.com/maps/search/?api=1&query=London+Eye", desc: "Giant Ferris wheel on Thames" },
                        { name: "Tower Bridge", map: "https://www.google.com/maps/search/?api=1&query=Tower+Bridge+London", desc: "Victorian bascule bridge" }
                    ],
                    medium: [
                        { name: "Westminster Abbey", map: "https://www.google.com/maps/search/?api=1&query=Westminster+Abbey", desc: "Gothic church & coronation site" },
                        { name: "St. Paul's Cathedral", map: "https://www.google.com/maps/search/?api=1&query=St+Paul's+Cathedral+London", desc: "Christopher Wren masterpiece" },
                        { name: "Natural History Museum", map: "https://www.google.com/maps/search/?api=1&query=Natural+History+Museum+London", desc: "Dinosaur skeletons & dioramas" },
                        { name: "Camden Market", map: "https://www.google.com/maps/search/?api=1&query=Camden+Market+London", desc: "Alternative fashion & food hub" }
                    ],
                    long: [
                        { name: "Shakespeare's Globe", map: "https://www.google.com/maps/search/?api=1&query=Shakespeare's+Globe", desc: "Elizabethan theatre reconstruction" },
                        { name: "Kew Gardens", map: "https://www.google.com/maps/search/?api=1&query=Kew+Gardens+London", desc: "300-acre botanical gardens" },
                        { name: "Hampton Court Palace", map: "https://www.google.com/maps/search/?api=1&query=Hampton+Court+Palace", desc: "Henry VIII's riverside palace" },
                        { name: "Leadenhall Market", map: "https://www.google.com/maps/search/?api=1&query=Leadenhall+Market", desc: "Victorian covered market" }
                    ]
                },
                hotels: {
                    budget: [
                        { name: "Premier Inn London", map: "https://www.google.com/maps/search/?api=1&query=Premier+Inn+London+City", price: "₹15,000/night", rating: "4.0" },
                        { name: "Travelodge Central", map: "https://www.google.com/maps/search/?api=1&query=Travelodge+London+Central", price: "₹12,000/night", rating: "3.8" }
                    ],
                    luxury: [
                        { name: "The Ritz London", map: "https://www.google.com/maps/search/?api=1&query=The+Ritz+London", price: "₹1,50,000/night", rating: "5" },
                        { name: "Shangri-La at The Shard", map: "https://www.google.com/maps/search/?api=1&query=Shangri-La+The+Shard", price: "₹2,00,000/night", rating: "5" }
                    ]
                }
            },
        
            "tokyo": {
                places: {
                    short: [
                        { name: "Senso-ji Temple", map: "https://www.google.com/maps/search/?api=1&query=Sensoji+Temple", desc: "Tokyo's oldest Buddhist temple" },
                        { name: "Shibuya Crossing", map: "https://www.google.com/maps/search/?api=1&query=Shibuya+Crossing", desc: "World's busiest pedestrian crossing" },
                        { name: "Tokyo Skytree", map: "https://www.google.com/maps/search/?api=1&query=Tokyo+Skytree", desc: "634m broadcasting tower" },
                        { name: "Meiji Shrine", map: "https://www.google.com/maps/search/?api=1&query=Meiji+Shrine+Tokyo", desc: "Shinto shrine in forested area" },
                        { name: "Tsukiji Outer Market", map: "https://www.google.com/maps/search/?api=1&query=Tsukiji+Outer+Market", desc: "Fresh seafood & street food" }
                    ],
                    medium: [
                        { name: "teamLab Borderless", map: "https://www.google.com/maps/search/?api=1&query=teamLab+Borderless+Tokyo", desc: "Digital art museum" },
                        { name: "Imperial Palace", map: "https://www.google.com/maps/search/?api=1&query=Imperial+Palace+Tokyo", desc: "Emperor's residence & gardens" },
                        { name: "Akihabara", map: "https://www.google.com/maps/search/?api=1&query=Akihabara+Tokyo", desc: "Electronics & anime district" },
                        { name: "Odaiba", map: "https://www.google.com/maps/search/?api=1&query=Odaiba+Tokyo", desc: "Futuristic entertainment island"}
                    ]
                }
            }
        }
    

// Preloader Control
const preloader = document.querySelector('.preloader');

// Hide preloader when page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 3300);
});

// Show preloader on form submission
document.getElementById('tripForm').addEventListener('submit', () => {
    preloader.classList.remove('hidden');
});

// Modify your existing form submission code:
// Add this in your finally clause after API call
function hidePreloader() {
    preloader.classList.add('hidden');
}


        // Update the updateBudget function
function updateBudget(value) {
    const budgetValue = parseInt(value);
    // Update displayed value
    document.getElementById('budgetValue').textContent = 
        '₹' + budgetValue.toLocaleString('en-IN');
    
    // Update slider gradient
    const percentage = (budgetValue / 100000) * 100;
    document.getElementById('budget').style.background = 
        `linear-gradient(to right, #3b82f6 ${percentage}%, #e0e7ff ${percentage}%)`;
}

// Initialize slider on page load
document.addEventListener('DOMContentLoaded', () => {
    const initialValue = document.getElementById('budget').value;
    updateBudget(initialValue);
});

async function generatePlan() {
    const location = document.getElementById('destination').value.trim().toLowerCase();
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const budget = parseInt(document.getElementById('budget').value);
    
    if (!location || !startDate || !endDate) {
        alert('Please fill all fields!');
        return;
    }

    try {
        const data = mockData[location] || getFallbackData(location);
        const weather = await fetchWeather(location);
        
        // Calculate trip duration
        const start = new Date(startDate);
        const end = new Date(endDate);
        const tripDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

        // Get appropriate places
        let places = [];
        if(tripDays <= 5) {
            places = data.places.short;
        } else if(tripDays <= 10) {
            places = [...data.places.short, ...data.places.medium].slice(0, 8);
        } else {
            places = [...data.places.short, ...data.places.medium, ...data.places.long].slice(0, 12);
        }

        displayWeather(weather, location);
        displayPlaces(places);  // Pass the filtered array
        displayHotels(data.hotels, budget);

        document.getElementById('results').classList.remove('hidden');
    } catch (error) {
        alert('Error: ' + error.message);
    }
}

function displayWeather(weather, location) {
    const weatherCard = document.getElementById('weatherCard');
    
    // Update location name
    document.getElementById('weatherLocation').textContent = location.toUpperCase();
    
    // Update weather details
    const weatherGrid = weatherCard.querySelector('.grid');
    weatherGrid.innerHTML = `
        <div class="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
            <p class="text-3xl font-bold">🌡️ ${weather.temp}°C</p>
            <p class="text-sm mt-1">Temperature</p>
        </div>
        <div class="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
            <p class="text-3xl font-bold">💧 ${weather.humidity}%</p>
            <p class="text-sm mt-1">Humidity</p>
        </div>
        <div class="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
            <p class="text-3xl font-bold">${weather.condition}</p>
            <p class="text-sm mt-1">Condition</p>
        </div>
    `;
}

function displayPlaces(places) {
    const placesContainer = document.getElementById('placesCard').querySelector('.space-y-4');
    placesContainer.innerHTML = places.map(place => `
        <div class="place-card">
            <a href="${place.map}" target="_blank" 
               class="text-gray-800 hover:text-blue-600 font-medium flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 flex-shrink-0 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>
                    <div class="font-semibold">${place.name}</div>
                    <div class="text-gray-600 text-sm mt-1">${place.desc}</div>
                </div>
            </a>
        </div>
    `).join('');
}

function displayHotels(hotels, budget) {
    const hotelType = budget <= 20000 ? 'budget' : 'luxury';
    const hotelsContainer = document.getElementById('hotelsCard').querySelector('.space-y-4');
    
    hotelsContainer.innerHTML = hotels[hotelType].map(hotel => `
        <div class="hotel-card">
            <div class="flex justify-between items-start gap-4">
                <div class="flex-1">
                    <a href="${hotel.map}" target="_blank" 
                       class="text-gray-800 hover:text-purple-600 font-medium block">
                        ${hotel.name}
                    </a>
                    <div class="flex items-center gap-2 mt-2">
                        <span class="text-sm font-medium text-gray-600">${hotel.price}</span>
                        <span class="text-yellow-500 flex items-center">
                            ${'★'.repeat(hotel.rating)}
                        </span>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                </svg>
            </div>
        </div>
    `).join('');
}

async function fetchWeather(location) {
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=eca34ef9c2684e07b46171937250702&q=${encodeURIComponent(location)}&aqi=no`
        );
        const data = await response.json();
        return {
            temp: data.current.temp_c,
            humidity: data.current.humidity,
            condition: data.current.condition.text
        };
    } catch (error) {
        return { temp: 25, humidity: 65, condition: "Sunny" }; // Fallback data
    }
}

function getFallbackData(location) {
    return {
        places: [
            { 
                name: `${location} City Center`, 
                map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}+city+center`,
                desc: "Main city area" 
            }
        ],
        hotels: {
            budget: [
                { 
                    name: `${location} Budget Inn`, 
                    price: "₹1,500/night", 
                    map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}+budget+hotels`, 
                    rating: "3" 
                }
            ],
            luxury: [
                { 
                    name: `${location} Grand Hotel`, 
                    price: "₹25,000/night", 
                    map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}+luxury+hotels`, 
                    rating: "5" 
                }
            ]
        }
    };
}
