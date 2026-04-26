import Vuex from "vuex";

import publications from './publication';
import reviewer_for from './reviewer-for';
import pc_member from './pc-member';
import teaching from './teaching';
import other_activities from './other-activities';

const database = () => {
      return new Vuex.Store({
            state: {
                  
                  maintenance: {
                        state: true,
                        menuMobileState: false,
                        menuHamburgerState: false,
                        buttonNuxt: 'Read more',
                        animation: {
                              state : false,
                        },
                        head: {
                              title: 'Dr. Mohammed SAYAGH',
                              meta: [{
                                    hid: 'site for DR.Mohamed SAYAGH',
                                    name: 'description',
                                    content: 'My custom description'
                              }]
                        },
                        pagePrincipal: {
                              title: 'main page',
                        },
                        menu: [
                              {
                                    titre: "Research",
                                    state: true,
                              },
                              {
                                    titre: "Publications",
                                    state: false,
                              },
                              {
                                    titre: "Reviewer for",
                                    state: false,
                              },
                              {
                                    titre: "PC Member",
                                    state: false,
                              },
                              {
                                    titre: "Teaching",
                                    state: false,
                              },
                              {
                                    titre: "Open Positions",
                                    state: false,
                              },
                        ],
                  },
                  main: {
                        sousTitre: "ASSOCIATE PROFESSOR AT ETS (QUÉBEC UNIVERSITY).",
                        titre: "mohammed sayagh",
                        image: {
                              link: "",
                              src: "~/assets/image_mohammed.png",
                              alt: ""
                        },
                        email: "mohammed.sayagh@etsmtl.ca",
                        paragraphe: [
                              {
                                    text: "I am an associate professor at Ecole Technologie Supérieure - Québec University. Before that, I was working as a PostDoc fellow in"
                              },
                              {
                                    text: "the Software Analysis and Intelligence Lab (SAIL)",
                                    link: "https://sail.cs.queensu.ca/"
                              },
                              {
                                    text: "at"
                              },
                              {
                                    text: "Queen's University (Kingston, ON)",
                                    link: "http://queensu.ca/"
                              },
                              {
                                    text: "under the supervision of"
                              },
                              {
                                    text: "Prof. Ahmed E. Hassan.",
                                    link: "http://research.cs.queensu.ca/home/ahmed/home/"
                              },
                              {
                                    text: "I obtained my Ph.D. from"
                              },
                              {
                                    text: "the Maintenance, Construction, and Intelligence of Software lab (MCIS) ",
                                    link: "http://mcis.cs.queensu.ca/"
                              },
                              {
                                    text: "at"
                              },
                              {
                                    text: "Ecole Polytechnique (Montréal, QC)",
                                    link: "http://polymtl.ca/"
                              },
                              {
                                    text: "under the supervision of"
                              },
                              {
                                    text: "Prof. Bram Adams.",
                                    link: "http://mcis.cs.queensu.ca/bram.html"
                              },
                              {
                                    text: "I focus on improving software DevOps pipelines and investigating methods that range from machine learning to Agentic-AI for DevOps practices. In particular, my current research studies how to improve our DevOps pipelines to better integrate AI agents as efficient team members in complex software systems (including LLM-based systems). My work combines empirical analysis and intelligent tooling to improve build, configuration, deployment, monitoring, and evolution workflows."
                              },
                        ]

                  },
                  research: {
                        titre: "Research",
                        statement: "I focus on improving software DevOps pipelines and investigating approaches that span from machine learning to Agentic-AI for DevOps practices. A central goal of my research is to understand and engineer how AI agents can act as effective team members in complex software systems, including LLM-based systems. ",
                        themes: [
                              {
                                    titre: "From Machine Learning to Agentic-AI for Software DevOps",
                                    icon: "🤖",
                                    description: "Designing and evaluating the transition from predictive ML models to autonomous and semi-autonomous LLM agents for DevOps tasks such as pull request analysis, technical debt management, incident support, and CI pipeline decision-making."
                              },
                              {
                                    titre: "DevOps & CI/CD",
                                    icon: "⚙️",
                                    description: "Investigating build optimization, continuous integration pipelines, GitHub Actions metrics, and merge request acceptance, while assessing where machine learning and agentic systems can augment developer workflows."
                              },
                              {
                                    titre: "Configuration Management",
                                    icon: "🔧",
                                    description: "Studying configuration-related issues in complex systems and developing recommendation and automation techniques, from ML-based predictors to agentic assistants that guide configuration decisions."
                              },
                              {
                                    titre: "Log Analysis & Monitoring",
                                    icon: "📋",
                                    description: "Exploring logging practices, log level prediction, log compression, and observability challenges, including how agentic approaches can support faster diagnosis and operational intelligence."
                              },
                              {
                                    titre: "Microservices & Multi-Component Systems",
                                    icon: "🏗️",
                                    description: "Examining real-world DevOps practices in microservices and distributed systems, including monolith-to-microservice decomposition and opportunities for agent-driven orchestration and analysis."
                              },
                              {
                                    titre: "Infrastructure-as-Code",
                                    icon: "☁️",
                                    description: "Analyzing IaC smells, code review practices, and infrastructure evolution, with a focus on ML- and agent-based support for safer and more reliable cloud operations."
                              },
                        ]
                  },
                  openPositions: {
                        titre: "Open Positions",
                        intro: "We are currently looking for 3 PhD students to join our research group at École de Technologie Supérieure (ÉTS), Québec University. We are also open to strong Master's applicants. If you are passionate about software engineering research, DevOps, and Agentic-AI for complex software systems, please reach out.",
                        list: [
                              {
                                    type: "PhD",
                                    title: "PhD Position in Empirical Software Engineering",
                                    description: "I am seeking a PhD student to work on topics related to DevOps, AI-assisted software engineering, log analysis, configuration management, or related areas. The position includes a competitive scholarship and the opportunity to collaborate with world-class researchers.",
                                    requirements: [
                                          "Master's degree (or equivalent) in Computer Science, Software Engineering, or a related field",
                                          "Strong programming skills (Python, Java, or similar)",
                                          "Experience with data analysis, machine learning, or mining software repositories is a plus",
                                          "Good written and spoken English communication skills",
                                          "Self-motivated with the ability to work independently and in a team"
                                    ]
                              },
                              {
                                    type: "Master",
                                    title: "Master's Position in Empirical Software Engineering",
                                    description: "I am looking for Master's students (research-based) interested in conducting empirical studies on modern software engineering practices. Topics include DevOps, software quality, AI in SE, and more.",
                                    requirements: [
                                          "Bachelor's degree in Computer Science, Software Engineering, or a related field",
                                          "Strong programming skills",
                                          "Interest in research and data-driven analysis",
                                          "Good written and spoken English or French communication skills"
                                    ]
                              }
                        ]
                  },
                  notification: {
                        state: true,
                        yourNotificationList: [
                              {
                                    state: true,
                                    date: {
                                          state: false,
                                          day: '28',
                                          month: '08',
                                          year: '2022'
                                    },
                                    text: 'I am currently looking for motivated and hard working PhD and Masters students.',
                                    button: [{
                                          // J'ai fais en sorte que ca marche pour un seul bouton
                                          // Je vais gerer pour deux bouton ou meme plus en cas de necessite
                                          state: true,
                                          buttonText: 'contact me',
                                          buttonLink: 'mailto:mohammed.sayagh@etsmtl.ca'
                                    },],
                              },
                        ]
                  },
            },
            modules: {
                  publications,
                  reviewer_for,
                  pc_member,
                  teaching,
                  other_activities
            },
            getters: {
                  GET_MAINTENANCE: (state, payload) => state.maintenance,
                  GET_MAIN: (state, payload) => state.main,
                  GET_NOTIFICATION: (state, payload) => state.notification,
                  GET_RESEARCH: (state) => state.research,
                  GET_OPEN_POSITIONS: (state) => state.openPositions,
            },
            mutations: {
                  SET_MAINTENANCE: (state, payload) => {
                        state.maintenance = payload;
                  },
                  SET_NOTIFICATION: (state, payload) => {
                        state.notification = payload;
                  },
            },
            actions: {
                  SET_MAINTENANCE: (context, payload) => {
                        context.commit("SET_MAINTENANCE", payload)
                  },
                  SET_NOTIFICATION: (context, payload) => {
                        context.commit("SET_NOTIFICATION", payload)
                  },
            }
      })
};

export default database;
