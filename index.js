const mainContentEl = document.getElementById("main-content");
const researchcardEl = document.getElementById("research-paper-card");
const darkMode = document.getElementById("slider");
const checkBox = document.getElementById("checkbox");
const logo = document.getElementById("logo");
const searchEl = document.getElementById("search");
const courseEl = document.getElementById("course");
const filterEl = document.getElementById("filter");
const logoutbtn = document.getElementById("logout-btn");
const repositoryNav = document.getElementById("repository");
const saveNav = document.getElementById("savedPapers");
const historyNav = document.getElementById("history");
// ------------------------------ EVENTS / MODE ------------------------------ //

logoutbtn.addEventListener("click", () => {
  window.location.href = "login.html";
});

filterEl.addEventListener("click", () => {
  filterPopUp();
});

courseEl.addEventListener("change", () => courseFilter());

searchEl.addEventListener("keyup", () => search());

logo.addEventListener("click", () => generateResearchCard());

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

const steadyMode = () => {
  if (localStorage.getItem("mode") === "dark") {
    document.body.classList.toggle("dark-theme");
    checkBox.checked = true;
  } else {
    document.body.classList.toggle("light-theme");
  }
};

steadyMode();
// ------------------------------ EVENTS / MODE ------------------------------ //

// ------------------------------     DATABASE    ------------------------------ //

const researchCardContents = [
  {
    id: "100",
    title:
      "Integrasyong Feedforward sa Pagtatasa ng mga Awtput ng mga Mag-Aaral ng Online Distance Learning sa Filipino 10",
    author: "Ayban Hernandez",
    abstract:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae qui rerum debitis sit velit. Quia, possimus placeat? Amet expedita voluptatibus blanditiis quod reiciendis, repellat magnam illum error sit consectetur minus dolor voluptatem aliquid cum dolorem, commodi, ipsa at doloremque deleniti assumenda nobis illo! Aliquid eius voluptate ea placeat. Aliquid, consequuntur!",
    date: "10-17-19",
    year: "19",
    type: "thesis",
    department: "GATE",
    keyword: "feedforward",
    research: "research/researchSample.pdf",
  },
  {
    id: "101",
    title: "The Development of Kulangai Pasta Pandesal - IMRAD",
    author: "Lyka S. Abad",
    abstract:
      "The research process is the backbone of any good thesis or capstone. It is important to take time to think about the question you are going to answer, as well as how you are going to find an answer to that question. When writing a thesis, it is important to have a clear understanding of what the purpose of your research is. This can be done by asking yourself questions such as: What do I want to learn? What do I want my audience to learn? What questions do I have? These questions will help you determine what type of research you need and how you should begin that research. Once you have determined what type of research you will be doing, it is important to decide what sources may provide information on these topics. For example, if your topic involves how much knowledge people accumulate over time, then it may be best to use articles written in newspapers or magazines rather than books. However, if your topic involves how much knowledge people acquire over time, then it may be best to use books written on this subject rather than newspapers or magazines because books tend to contain more information than newspapers or magazines (Campbell et al., 2008).",
    date: "01-17-19",
    year: "19",
    type: "thesis",
    department: "BAM",
    keyword: "kulangai",
    research: "research/researchSample.pdf",
  },
  {
    id: "102",
    title:
      "Effectiveness of RTW Live Selling as a Marketing Strategy Among Online Buyers in San Jose Del Monte Bulacan - IMRAD",
    author: "Freddi Mar M. Mañalac",
    abstract:
      "Research is the first step in the process of writing a thesis or capstone project. The purpose of research is to understand a topic, and then develop an argument for how it relates to a larger body of knowledge. Research can be conducted by reading or watching videos, or even by conducting interviews with experts in your field. You may also want to look at sample papers from other students who have written their thesis or capstone projects on this topic. After you have done some preliminary research, it's time to start writing. Your paper will be based on what you have learned about your topic through this process.",
    date: "12-19-20",
    year: "20",
    type: "thesis",
    department: "BAM",
    keyword: "effectiveness",
    research: "research/researchSample.pdf",
  },
  {
    id: "103",
    title:
      "Web Based Bulsu Archive of Thesis and Capstone Sarmiento Campus - IMRAD",
    author: "Diether Medina",
    abstract:
      "Many students are assigned a capstone project at the end of their coursework. This is a special paper designed to be a culmination of all the hard work you have put in throughout the semester. The goal of this paper is not to get you an A, but rather to show that you have mastered the material being taught and that you can produce something that reflects your knowledge and understanding of the subject matter.",
    date: "11-17-21",
    year: "21",
    type: "capstone",
    department: "IIT",
    keyword: "web-based",
    research: "research/researchSample.pdf",
  },
  {
    id: "104",
    title: "Web based Baranggay System of Lawang Pare ",
    author: "Jed F. Cauan",
    abstract:
      "Research is the most important part of a thesis or capstone project. It is the foundation on which all other aspects of the project rest. Without research, there would be no basis for discussion, no information to share, and no opportunity to explore new ideas. When you are starting your research project, you should be aware of the following: • You must be able to clearly define your topic and audience. This will help you identify the most appropriate sources of information and how best to present them in your report. • You must have an understanding of the topic you are researching. For example, if you are writing a report about a major technology company that develops software programs that run on computers, then it would not be appropriate to use magazine articles on marketing strategies as source material for your report. However, if you were writing about a small business whose customers use word processing software such as Microsoft Word or Open Office Writer, then magazine articles about marketing strategies might be appropriate sources for your report. • You should consider whether there are any ethical issues associated with using some sources over others based on their content or purpose for being used (e.g., whether a particular article was published in order ",
    date: "08-01-22",
    year: "22",
    type: "capstone",
    department: "IIT",
    keyword: "web-based",
    research: "research/researchSample.pdf",
  },
  {
    id: "105",
    title:
      "The Impact of Online Learning on Student Achievement: A Comparative Study of Traditional and Online Learning Environments",
    author: "Ethan Davis",
    abstract:
      "This study investigates the effectiveness of project-based learning (PBL) in enhancing students' critical thinking skills in science education. A mixed-methods approach was used to gather data from a sample of 50 students enrolled in a science course at a public high school. Results indicate that PBL significantly enhances students' critical thinking skills in science education compared to traditional methods of teaching. The study provides insights into the use of PBL as a pedagogical tool for improving students' critical thinking skills in science education.",
    date: "08-01-19",
    year: "19",
    type: "thesis",
    department: "GATE",
    keyword: "Online Learning",
    research: "research/researchSample.pdf",
  },
  {
    id: "106",
    title:
      "Investigating the Effectiveness of Project-Based Learning in Enhancing Students' Critical Thinking Skills in Science Education ",
    author: "Sophia Patel",
    abstract:
      "This study analyzes the factors affecting parental involvement in their children's education in urban schools. A qualitative case study design was used to gather data from a sample of 20 parents with children enrolled in urban schools. Findings indicate that lack of time, lack of information, and lack of trust are significant barriers to parental involvement in their children's education. The study provides insights into the factors affecting parental involvement and the potential strategies that schools can use to increase parental involvement in urban schools. ",
    date: "08-01-20",
    year: "20",
    type: "thesis",
    department: "GATE",
    keyword: "project-based learning",
    research: "research/researchSample.pdf",
  },
  {
    id: "107",
    title:
      "Exploring the Relationship Between Teacher-Student Relationships and Academic Performance Among Elementary School Students",
    author: "Luke Kim",
    abstract:
      "This study explores the relationship between teacher-student relationships and academic performance among elementary school students. A quantitative approach was used to gather data from a sample of 100 elementary school students. Results indicate that positive teacher-student relationships are significantly associated with higher academic performance among elementary school students. The study provides insights into the role of teacher-student relationships in enhancing academic performance and the potential strategies that schools can use to foster positive teacher-student relationships. ",
    date: "08-01-22",
    year: "22",
    type: "thesis",
    department: "GATE",
    keyword: "teacher-student relationship",
    research: "research/researchSample.pdf",
  },
  {
    id: "108",
    title:
      "An Analysis of the Factors Affecting Parental Involvement in their Children's Education: A Case Study of Urban Schools",
    author: "Maya Green",
    abstract:
      "This qualitative study explores the role of emotional intelligence in developing effective leadership skills among school principals. Data was collected from a sample of 10 school principals using semi-structured interviews. Findings indicate that emotional intelligence plays a critical role in developing effective leadership skills among school principals. The study provides insights into the importance of emotional intelligence in educational leadership and the potential strategies that schools can use to enhance emotional intelligence among school principals. ",
    date: "08-01-21",
    year: "21",
    type: "thesis",
    department: "GATE",
    keyword: "parental  involvement analysis",
    research: "research/researchSample.pdf",
  },
  {
    id: "109",
    title:
      "The Impact of Artificial Intelligence on the Future of Work: A Systematic Review",
    author: "Sarah Lee",
    abstract:
      "This systematic review explores the impact of artificial intelligence on the future of work. A total of 50 studies were included in the analysis, covering a range of industries and occupations. Results indicate that artificial intelligence has the potential to significantly transform the nature of work, with both positive and negative effects. The study provides insights into the potential implications of AI for policymakers, employers, and workers.",
    date: "06-01-19",
    year: "19",
    type: "systematic review",
    department: "IIT",
    keyword: "artificial intelligence, future of work",
    research: "research/researchSample.pdf",
  },
  {
    id: "110",
    title:
      "The Relationship Between Social Media Use and Self-Esteem in Adolescents",
    author: "John Smith",
    abstract:
      "This correlational study examines the relationship between social media use and self-esteem in adolescents. Data was collected from a sample of 500 adolescents using self-reported measures of social media use and self-esteem. Results indicate a significant negative relationship between social media use and self-esteem, particularly for girls. The study highlights the potential risks of excessive social media use for adolescent mental health.",
    date: "09-20-19",
    year: "19",
    type: "correlational study",
    department: "BAM",
    keyword: "social media, self-esteem, adolescents",
    research: "research/researchSample.pdf",
  },
  {
    id: "111",
    title:
      "The Impact of Digital Transformation on Business Performance: A Case Study of Small and Medium-Sized Enterprises",
    author: "Michelle Lee",
    abstract:
      "This case study examines the impact of digital transformation on the business performance of small and medium-sized enterprises. Data was collected from a sample of 20 SMEs using semi-structured interviews and financial performance measures. Results indicate that digital transformation can have a positive impact on business performance, particularly in terms of efficiency, productivity, and customer satisfaction. The study provides insights into the potential benefits and challenges of digital transformation for SMEs.",
    date: "01-10-20",
    year: "20",
    type: "case study",
    department: "IIT",
    keyword: "digital transformation, SMEs, business performance",
    research: "research/researchSample.pdf",
  },
  {
    id: "112",
    title:
      "The Role of Emotional Intelligence in Teamwork: A Cross-Sectional Study",
    author: "Alex Wong",
    abstract:
      "This cross-sectional study explores the role of emotional intelligence in teamwork. Data was collected from a sample of 100 employees using self-reported measures of emotional intelligence and teamwork effectiveness. Results indicate a significant positive relationship between emotional intelligence and teamwork effectiveness, particularly for tasks requiring collaboration and communication. The study highlights the potential benefits of emotional intelligence training for improving teamwork in the workplace.",
    date: "05-01-20",
    year: "20",
    type: "cross-sectional study",
    department: "GATE",
    keyword: "emotional intelligence, teamwork",
    research: "research/researchSample.pdf",
  },
  {
    id: "113",
    title: "A Comparative Study of Teaching Methods in Science Education",
    author: "Sarah Lee",
    abstract:
      "This study compares the effectiveness of traditional lecture-based teaching versus inquiry-based learning in science education. Data was collected from a sample of 60 high school students who were randomly assigned to either a lecture-based group or an inquiry-based group. Results indicate that the inquiry-based group showed significantly higher gains in content knowledge, scientific reasoning skills, and interest in science. The study suggests that inquiry-based learning may be a more effective teaching method in science education.",
    date: "12-05-19",
    year: "19",
    type: "comparative study",
    department: "IIT",
    keyword: "teaching methods, science education",
    research: "research/researchSample.pdf",
  },
  {
    id: "114",
    title: "Exploring the Impact of Social Media on Youth Mental Health",
    author: "Olivia Davis",
    abstract:
      "This qualitative study explores the impact of social media on youth mental health. Data was collected from a sample of 20 teenagers using semi-structured interviews. Findings indicate that social media use is associated with increased anxiety, depression, and negative body image. However, the study also highlights the potential positive impact of social media on social support and self-expression. The study suggests that a balanced approach to social media use is important for promoting youth mental health.",
    date: "07-03-22",
    year: "22",
    type: "qualitative study",
    department: "BAM",
    keyword: "social media, mental health",
    research: "research/researchSample.pdf",
  },
  {
    id: "115",
    title:
      "The Impact of Teacher-Student Relationships on Academic Achievement",
    author: "Daniel Kim",
    abstract:
      "This quantitative study examines the relationship between teacher-student relationships and academic achievement. Data was collected from a sample of 200 high school students using self-reported measures of teacher-student relationships and academic achievement. Results indicate a significant positive relationship between teacher-student relationships and academic achievement, particularly in the areas of motivation and engagement. The study suggests that building positive teacher-student relationships may be an effective way to improve academic achievement.",
    date: "02-09-21",
    year: "21",
    type: "quantitative study",
    department: "GATE",
    keyword: "teacher-student relationships, academic achievement",
    research: "research/researchSample.pdf",
  },
  {
    id: "116",
    title: "A Study of the Impact of Parenting Styles on Child Development",
    author: "Nina Patel",
    abstract:
      "This longitudinal study examines the impact of parenting styles on child development over a 10-year period. Data was collected from a sample of 50 families using self-reported measures of parenting styles and child development outcomes. Results indicate that authoritarian and permissive parenting styles are associated with negative child development outcomes, while authoritative parenting is associated with positive outcomes. The study suggests that promoting authoritative parenting may be an effective way to support positive child development.",
    date: "09-12-20",
    year: "20",
    type: "longitudinal study",
    department: "IIT",
    keyword: "parenting styles, child development",
    research: "research/researchSample.pdf",
  },
  {
    id: "117",
    title:
      "The Impact of Digital Literacy on Academic Performance: A Study of College Students",
    author: "Sophie Lee",
    abstract:
      "This quantitative study examines the relationship between digital literacy and academic performance among college students. Data was collected from a sample of 500 students using a self-reported survey on their digital literacy skills and academic grades. Results indicate a positive correlation between digital literacy and academic performance, suggesting that students with higher digital literacy skills tend to perform better academically. The study suggests that digital literacy should be included as part of the college curriculum to enhance students' academic performance.",
    date: "01-05-22",
    year: "22",
    type: "quantitative study",
    department: "IIT",
    keyword: "digital literacy, academic performance",
    research: "research/researchSample.pdf",
  },
  {
    id: "118",
    title: "The Impact of Social Media on Mental Health: A Longitudinal Study",
    author: "Sarah Lee",
    abstract:
      "This longitudinal study investigates the impact of social media on mental health over a period of two years. Data was collected from a sample of 500 participants using self-reported measures of social media use and mental health outcomes. Findings suggest that increased social media use is associated with higher levels of anxiety and depression, and that this relationship is stronger for younger users. The study raises important implications for the development of interventions aimed at reducing negative mental health outcomes associated with social media use.",
    date: "09-15-19",
    year: "19",
    type: "longitudinal study",
    department: "BAM",
    keyword: "social media, mental health",
    research: "research/researchSample.pdf",
  },
  {
    id: "119",
    title:
      "Predictors of Academic Success: A Comparison of High School and College Students",
    author: "David Kim",
    abstract:
      "This study compares the predictors of academic success between high school and college students. Data was collected from a sample of 300 students using self-reported measures of academic performance and various demographic and academic factors. Results indicate that while high school GPA and standardized test scores are important predictors of college success, other factors such as motivation, study habits, and time management are also significant. The study provides insights into the unique challenges faced by college students and the potential strategies that can be used to support their academic success.",
    date: "12-01-21",
    year: "21",
    type: "comparative study",
    department: "IIT",
    keyword: "academic success, high school, college",
    research: "research/researchSample.pdf",
  },
  {
    id: "120",
    title:
      "The Relationship Between Sleep and Cognitive Functioning: A Meta-Analysis",
    author: "Emily Chen",
    abstract:
      "This meta-analysis examines the relationship between sleep and cognitive functioning across a range of ages and populations. Data from 50 studies was analyzed using a random-effects model, with sleep duration and quality as the primary predictors and various measures of cognitive functioning as the outcomes. Results indicate a significant positive relationship between sleep and cognitive functioning, particularly for tasks requiring attention, memory, and executive function. The study has important implications for understanding the role of sleep in cognitive health and the potential interventions that can be used to improve sleep and cognitive functioning.",
    date: "06-15-22",
    year: "22",
    type: "meta-analysis",
    department: "GATE",
    keyword: "sleep, cognitive functioning",
    research: "research/researchSample.pdf",
  },
];

const viewsStorage = JSON.parse(localStorage.getItem("views")) || [];

const downloadStorage = JSON.parse(localStorage.getItem("downloads")) || [];

let savePaperStorage = JSON.parse(localStorage.getItem("savedPapers")) || [];

const savedPapersId = JSON.parse(localStorage.getItem("savedPapersId")) || [];

let historyPaperStorage = JSON.parse(localStorage.getItem("history")) || [];

let historyPapersId = JSON.parse(localStorage.getItem("historyId")) || [];

// ------------------------------     DATABASE    ------------------------------ //

// ------------------------------    FUNCTIONS    ------------------------------ //

const generateResearchCard = () => {
  mainContentEl.innerHTML = researchCardContents
    .map((data) => {
      const { id, title, author, abstract, date } = data;
      const idSearch =
        viewsStorage.find((data) => id === data.id.toString()) || [];
      const idSearchDownloads =
        downloadStorage.find((data) => id === data.id.toString()) || [];
      return ` <div onclick="getNumberOfViews(${id})" class="research-paper-card" id="research-paper-${id}">
      <div class="card-content">
    <div class="research-title-and-bookmark-container">
      <h2 class="research-title">
        ${title}
      </h2>
      <i id="save-icon-${id}" class="fa-solid fa-bookmark fa-2xl" onclick="savePaper(event,${id})"></i>
    </div>
    <div class ="body">
    <p class="author">${author}</p>
    <p class="abstract">${abstract}</p>
    <p class="date">${date}</p>
    <p class="viewsDownloads">VIEWS: <strong id="views-${id}"> ${
        idSearch.views === undefined ? 0 : idSearch.views
      }</strong> | DOWNLOADS: <strong id="download-${id}">${
        idSearchDownloads.downloads === undefined
          ? 0
          : idSearchDownloads.downloads
      }</strong> </p>
    </div>
    </div>
    
  </div>
`;
    })
    .join("");
};

generateResearchCard();

const repositoryNavigation = () => {
  generateResearchCard();
  repositoryIndicator();
  bookMark();
};

const generateSavedPaperPage = () => {
  mainContentEl.innerHTML = savePaperStorage
    .map((data) => {
      const { id, title, author, abstract, date } = data;
      const idSearch =
        viewsStorage.find((data) => id === data.id.toString()) || [];
      const idSearchDownloads =
        downloadStorage.find((data) => id === data.id.toString()) || [];
      return `
  <div onclick="getNumberOfViews(${id})" class="research-paper-card" id="research-paper-${id}">
      <div class="card-content">
    <div class="research-title-and-bookmark-container">
      <h2 class="research-title">
        ${title}
      </h2>
      <i id="save-icon-${id}" class="fa-solid fa-xmark fa-2xl" onclick="savePaper(event,${id})"></i>
    </div>
    <div class ="body">
    <p class="author">${author}</p>
    <p class="abstract">${abstract}</p>
    <p class="date">${date}</p>
    <p class="viewsDownloads">VIEWS: <strong id="views-${id}"> ${
        idSearch.views === undefined ? 0 : idSearch.views
      }</strong> | DOWNLOADS: <strong id="downloads-${id}">${
        idSearchDownloads.downloads === undefined
          ? 0
          : idSearchDownloads.downloads
      }</strong> </p>
    </div>
    </div>

  </div>
  `;
    })
    .join("");
  saveNavigator();
};

const savePaper = (event, researchId) => {
  event.stopPropagation();

  const saveIcon = document.getElementById(`save-icon-${researchId}`);

  const savedResearch = researchCardContents.find(
    (data) => data.id === researchId.toString()
  );
  const researchAlreadyExist = savePaperStorage.find(
    (data) => data.id === researchId.toString()
  );
  // const idSearch = savedPapersId.find(
  //   (data) => data.id === `save-icon-${researchId}`
  // );

  if (saveIcon.classList.contains("fa-bookmark-saved")) {
    saveIcon.classList.remove("fa-bookmark-saved");
    unsavePaper(researchAlreadyExist, researchId);
  } else {
    saveIcon.classList.add("fa-bookmark-saved");

    if (researchAlreadyExist) {
      savePaperStorage = savePaperStorage.filter(
        (data) => data.id !== researchId.toString()
      );
      generateSavedPaperPage();
    } else {
      savePaperStorage.unshift(savedResearch);
    }
  }
  localStorage.setItem("savedPapers", JSON.stringify(savePaperStorage));
  // if (saveIcon.classList.contains("fa-bookmark-saved")) {
  //   saveIcon.classList.remove("fa-bookmark-saved");
  //   unsavePaper(researchAlreadyExist, researchId);

  //   if (idSearch === undefined) {
  //     savedPapersId.unshift({ id: `save-icon-${researchId}`, mode: "unsaved" });
  //   } else {
  //     idSearch.mode = "unsaved";
  //   }
  //   localStorage.setItem("savedPapersId", JSON.stringify(savedPapersId));
  //   // console.log(savedPapersId);
  // } else {
  //   saveIcon.classList.add("fa-bookmark-saved");

  //   if (researchAlreadyExist) {
  //     savePaperStorage = savePaperStorage.filter(
  //       (data) => data.id !== researchId.toString()
  //     );
  //     generateSavedPaperPage();
  //   } else {
  //     savePaperStorage.unshift(savedResearch);
  //   }
  //   if (idSearch === undefined) {
  //     savedPapersId.unshift({ id: `save-icon-${researchId}`, mode: "saved" });
  //   } else {
  //     idSearch.mode = "saved";
  //   }
  //   localStorage.setItem("savedPapersId", JSON.stringify(savedPapersId));
  //   // console.log(savedPapersId);
  // }
  // localStorage.setItem("savedPapers", JSON.stringify(savePaperStorage));

  // const savedPapersId = savePaperStorage.map((data) => `save-icon-${data.id}`);
  // localStorage.setItem("savedPapersId", JSON.stringify(savedPapersId));
};

const unsavePaper = (researchAlreadyExist, researchId) => {
  if (researchAlreadyExist) {
    savePaperStorage = savePaperStorage.filter(
      (data) => data.id !== researchId.toString()
    );
  }
};

const bookMark = () => {
  savePaperStorage.forEach((data) => {
    const saveIcon = document.getElementById(`save-icon-${data.id}`);
    if (saveIcon) {
      saveIcon.classList.add("fa-bookmark-saved");
    }
  });
};
bookMark();

const getNumberOfViews = (researchId) => {
  const idSearch = viewsStorage.find((stored) => stored.id === researchId);

  if (idSearch === undefined) {
    viewsStorage.push({
      id: researchId,
      views: 1,
    });
  } else {
    idSearch.views += 1;
  }
  localStorage.setItem("views", JSON.stringify(viewsStorage));
  openResearch(researchId);
  getThreeLargestNumViews();
  // updateNumberOfViews(researchId);
};

// const updateNumberOfViews = (researchId) => {
//   const idSearch = viewsStorage.find((contents) => contents.id === researchId);
//   document.getElementById(`views-${researchId}`).innerText = idSearch.views;
//   openResearch(researchId);
//   getThreeLargestNumViews();
// };

// const updateNumberOfDownloads = (researchId) => {
//   const idSearch = downloadStorage.find(
//     (contents) => contents.id === researchId
//   );
// };

const openResearch = (researchId) => {
  const openedResearch = researchCardContents.find(
    (data) => data.id === researchId.toString()
  );
  const { id, title, author, department, date, abstract, research } =
    openedResearch;
  mainContentEl.innerHTML = `
  <div class= "researchViewedContainer">
 <article class="researchViewedContents"> <h2 class="research-title-viewed">
 ${title}
</h2>
<p class="author">Author: <span class="research-viewed-labels"> ${author}<span> </p>
<p class="department">Deparment: <span class="research-viewed-labels"> ${department} <span> </p>
<p class="date-viewed">Date: <span class="research-viewed-labels"> ${date}<span> </p>
<p class="abstract-viewed-label">Abstract: </p>
<p class="abstract-viewed"> ${abstract}</p>
<div class="saveAndDownload">
<i id="save-icon-${id}" class="fa-solid fa-bookmark fa-xl" onclick="savePaper(event,${id})"></i>
<i class="fa-solid fa-download fa-xl download-button"  id="download-button-${id}" onclick="download(${id})"></i>
</div> 
</div>
 <iframe src="${research}#toolbar=0" width="500px" height="700px" frameborder="0"></iframe></article>
  `;
  historySaved(researchId);
  bookMark();
};

const download = (researchId) => {
  const title = document.querySelector(".research-title-viewed").textContent;
  const paperUrl = document.querySelector("iframe").src;

  const a = document.createElement("a");
  a.href = paperUrl;
  a.download = `${title}.pdf`;
  a.click();
  console.log("downloading research");
  getNumberOfDownloads(researchId);
};

const getNumberOfDownloads = (researchId) => {
  const idSearch = downloadStorage.find((data) => data.id === researchId);

  if (idSearch === undefined) {
    downloadStorage.push({ id: researchId, downloads: 1 });
  } else {
    idSearch.downloads += 1;
  }

  localStorage.setItem("downloads", JSON.stringify(downloadStorage));
};

const historySaved = (researchId) => {
  const openedResearch = researchCardContents.find(
    (data) => data.id === researchId.toString()
  );

  const alreadyExist = historyPapersId.find((data) => data === researchId);

  if (alreadyExist) {
    return;
  } else {
    historyPapersId.unshift(researchId);
    historyPaperStorage.unshift(openedResearch);
    localStorage.setItem("history", JSON.stringify(historyPaperStorage));
    localStorage.setItem("historyId", JSON.stringify(historyPapersId));
  }
};

const historyUnsaved = (event, researchId) => {
  event.stopPropagation();

  historyPaperStorage = historyPaperStorage.filter(
    (data) => data.id !== researchId.toString()
  );

  historyPapersId = historyPapersId.filter((data) => data !== researchId);

  localStorage.setItem("history", JSON.stringify(historyPaperStorage));
  localStorage.setItem("historyId", JSON.stringify(historyPapersId));
  generateHistoryPage();
};

const generateHistoryPage = () => {
  mainContentEl.innerHTML = historyPaperStorage
    .map((data) => {
      const { id, title, author, abstract, date } = data;
      const idSearch =
        viewsStorage.find((data) => id === data.id.toString()) || [];
      const idSearchDownloads =
        downloadStorage.find((data) => id === data.id.toString()) || [];
      return ` <div onclick="getNumberOfViews(${id})" class="research-paper-card" id="research-paper-${id}">
    <div class="card-content">
  <div class="research-title-and-bookmark-container">
    <h2 class="research-title">
      ${title}
    </h2>
    <i id="remove-icon-${id}" class="fa-solid fa-xmark fa-2xl" onclick="historyUnsaved(event, ${id})"></i>
  </div>
  <div class ="body">
  <p class="author">${author}</p>
  <p class="abstract">${abstract}</p>
  <p class="date">${date}</p>
  <p class="viewsDownloads">VIEWS: <strong id="views-${id}"> ${
        idSearch.views === undefined ? 0 : idSearch.views
      }</strong> | DOWNLOADS: <strong id="downloads-${id}">${
        idSearchDownloads.downloads === undefined
          ? 0
          : idSearchDownloads.downloads
      }</strong> </p>
  </div>
  </div>
  
</div>
`;
    })
    .join("");
  historyNavigator();
};

const getThreeLargestNumViews = () => {
  const views = viewsStorage.map((properties) => properties.views);
  const sortViews = views.sort((a, b) => b - a);
  const largestThree = sortViews.slice(0, 3);
  let largestObjects = [];
  for (let i = 0; i < largestThree.length; i++) {
    const threeLargestObjects = viewsStorage.find(
      (data) => largestThree[i] === data.views
    );
    largestObjects.push(
      researchCardContents.find(
        (data) => threeLargestObjects.id.toString() === data.id
      )
    );
  }

  updateMostViewedCard(largestObjects);
  return largestObjects;
};

const getThreeLargestNumDownloads = () => {
  const downloads = downloadStorage.map((properties) => properties.downloads);
  const sortDownloads = downloads.sort((a, b) => b - a);
  const largestThree = sortDownloads.slice(0, 3);
  let largestObjects = [];
  for (let i = 0; i < largestThree.length; i++) {
    const threeLargestObjects = downloadStorage.find(
      (data) => largestThree[i] === data.downloads
    );
    largestObjects.push(
      researchCardContents.find(
        (data) => threeLargestObjects.id.toString() === data.id
      )
    );
  }
  updateMostDownloadedCard(largestObjects);
  return largestObjects;
};

const updateMostViewedCard = (largestObjects) => {
  const mostViewedResearchEl = document.getElementById("most-viewed-section");

  mostViewedResearchEl.innerHTML = largestObjects
    .map((data) => {
      const { id, title, department } = data;
      const viewResults = viewsStorage.find(
        (data) => data.id.toString() === id
      );
      const { views } = viewResults;
      return `<div class="contents" id="views-${id}-content">
      <label class="title" id="views-${id}-title" onclick="getNumberOfViews(${id})"> ${title}</label>
      <div class="results" id="${id}">
        <label class="views" id="label-view-${id}"> <strong>VIEWS:</strong> </label>
        <div class="views viewResult" id="view-Result-${id}"><div>${views}</div>
        <div>|</div>
        <div >${department}</div>
        </div>
      </div>`;
    })
    .join("");
};

const updateMostDownloadedCard = (largestObjects) => {
  const mostDownloadedResearchEl = document.getElementById(
    "most-downloaded-section"
  );

  mostDownloadedResearchEl.innerHTML = largestObjects
    .map((data) => {
      const { id, title, department } = data;
      const downloadResults = downloadStorage.find(
        (data) => data.id.toString() === id
      );
      const { downloads } = downloadResults;
      return `<div class="contents" id="downloads-${id}-content">
      <label class="title" id="downloads-${id}-title" onclick="getNumberOfViews(${id})"> ${title}</label>
      <div class="results" id="${id}">
        <label class="downloads" id="label-download-${id}"> <strong>VIEWS:</strong> </label>
        <div class="downloads viewResult" id="download-Result-${id}"><div>${downloads}</div>
        <div>|</div>
        <div >${department}</div>
        </div>
      </div>`;
    })
    .join("");
};

updateMostViewedCard(getThreeLargestNumViews());

updateMostDownloadedCard(getThreeLargestNumDownloads());

const search = () => {
  const searchResults = researchCardContents.filter(
    (data) =>
      data.keyword.includes(searchEl.value.toLowerCase()) ||
      data.title.toLowerCase().includes(searchEl.value.toLowerCase())
  );

  mainContentEl.innerHTML = searchResults
    .map((data) => {
      const { id, title, author, abstract, date } = data;
      const idSearch =
        viewsStorage.find((data) => id === data.id.toString()) || [];
      const idSearchDownloads =
        downloadStorage.find((data) => id === data.id.toString()) || [];
      return ` <div onclick="getNumberOfViews(${id})" class="research-paper-card" id="research-paper-${id}">
    <div class="card-content">
  <div class="research-title-and-bookmark-container">
    <h2 class="research-title">
      ${title}
    </h2>
    <i id="save-icon-${id}" class="fa-solid fa-bookmark fa-2xl" onclick="savePaper(event,${id})"></i>
  </div>
  <div class ="body">
  <p class="author">${author}</p>
  <p class="abstract">${abstract}</p>
  <p class="date">${date}</p>
  <p class="viewsDownloads">VIEWS: <strong id="views-${id}"> ${
        idSearch.views === undefined ? 0 : idSearch.views
      }</strong> | DOWNLOADS: <strong id="downloads-${id}">${
        idSearchDownloads.downloads === undefined
          ? 0
          : idSearchDownloads.downloads
      }</strong> </p>
  </div>
  </div>
  </div>
  `;
    })
    .join("");
  bookMark();
};
const courseFilter = () => {
  const selectedOption = courseEl.value;
  if (selectedOption === "iit") {
    const iitResearch = researchCardContents.filter(
      (data) => data.department === "IIT"
    );
    mainContentEl.innerHTML = iitResearch
      .map((data) => {
        const { id, title, author, abstract, date } = data;
        const idSearch =
          viewsStorage.find((data) => id === data.id.toString()) || [];
        const idSearchDownloads =
          downloadStorage.find((data) => id === data.id.toString()) || [];
        return ` <div onclick="getNumberOfViews(${id})" class="research-paper-card" id="research-paper-${id}">
      <div class="card-content">
    <div class="research-title-and-bookmark-container">
      <h2 class="research-title">
        ${title}
      </h2>
      <i id="save-icon-${id}" class="fa-solid fa-bookmark fa-2xl" onclick="savePaper(event,${id})"></i>
    </div>
    <div class ="body">
    <p class="author">${author}</p>
    <p class="abstract">${abstract}</p>
    <p class="date">${date}</p>
    <p class="viewsDownloads">VIEWS: <strong id="views-${id}"> ${
          idSearch.views === undefined ? 0 : idSearch.views
        }</strong> | DOWNLOADS: <strong id="download-${id}">${
          idSearchDownloads.downloads === undefined
            ? 0
            : idSearchDownloads.downloads
        }</strong> </p>
    </div>
    </div>
    
  </div>
`;
      })
      .join("");
  } else if (selectedOption === "bam") {
    const iitResearch = researchCardContents.filter(
      (data) => data.department === "BAM"
    );
    mainContentEl.innerHTML = iitResearch
      .map((data) => {
        const { id, title, author, abstract, date } = data;
        const idSearch =
          viewsStorage.find((data) => id === data.id.toString()) || [];
        const idSearchDownloads =
          downloadStorage.find((data) => id === data.id.toString()) || [];
        return ` <div onclick="getNumberOfViews(${id})" class="research-paper-card" id="research-paper-${id}">
      <div class="card-content">
    <div class="research-title-and-bookmark-container">
      <h2 class="research-title">
        ${title}
      </h2>
      <i id="save-icon-${id}" class="fa-solid fa-bookmark fa-2xl" onclick="savePaper(event,${id})"></i>
    </div>
    <div class ="body">
    <p class="author">${author}</p>
    <p class="abstract">${abstract}</p>
    <p class="date">${date}</p>
    <p class="viewsDownloads">VIEWS: <strong id="views-${id}"> ${
          idSearch.views === undefined ? 0 : idSearch.views
        }</strong> | DOWNLOADS: <strong id="download-${id}">${
          idSearchDownloads.downloads === undefined
            ? 0
            : idSearchDownloads.downloads
        }</strong> </p>
    </div>
    </div>
    
  </div>
`;
      })
      .join("");
  } else {
    const iitResearch = researchCardContents.filter(
      (data) => data.department === "GATE"
    );
    mainContentEl.innerHTML = iitResearch
      .map((data) => {
        const { id, title, author, abstract, date } = data;
        const idSearch =
          viewsStorage.find((data) => id === data.id.toString()) || [];
        const idSearchDownloads =
          downloadStorage.find((data) => id === data.id.toString()) || [];
        return ` <div onclick="getNumberOfViews(${id})" class="research-paper-card" id="research-paper-${id}">
      <div class="card-content">
    <div class="research-title-and-bookmark-container">
      <h2 class="research-title">
        ${title}
      </h2>
      <i id="save-icon-${id}" class="fa-solid fa-bookmark fa-2xl" onclick="savePaper(event,${id})"></i>
    </div>
    <div class ="body">
    <p class="author">${author}</p>
    <p class="abstract">${abstract}</p>
    <p class="date">${date}</p>
    <p class="viewsDownloads">VIEWS: <strong id="views-${id}"> ${
          idSearch.views === undefined ? 0 : idSearch.views
        }</strong> | DOWNLOADS: <strong id="download-${id}">${
          idSearchDownloads.downloads === undefined
            ? 0
            : idSearchDownloads.downloads
        }</strong> </p>
    </div>
    </div>
    
  </div>
`;
      })
      .join("");
  }
  bookMark();
};

const about = () => {
  window.open(
    "https://www.linkedin.com/in/mark-ivan-hernandez-a787a11b8/",
    "_blank"
  );
};

const filterPopUp = () => {
  const filterPopUpEl = document.createElement("div");
  filterPopUpEl.setAttribute("class", "filter-popup");
  filterPopUpEl.setAttribute("id", "filter-popup");
  filterPopUpEl.innerHTML = `
  <i id="remove-icon" class="fa-solid fa-xmark fa-xl remove" onclick="removePopUp()"></i>
  <label for="type">Research Type</label>
  <select class="type" id="type">
    <option value="default" style="display: none;">Research Type</option>
    <option value="thesis">Thesis</option>
    <option value="capstone">capstone</option>
  </select>
  <label for="year-from">From </label>
  <select class="year-from" id="year-from">
    <option value="default" style="display: none;">Scope Year From</option>
    <option value="19">2019</option>
    <option value="20">2020</option>
    <option value="21">2021</option>
    <option value="22">2022</option>
  </select>
  <label for="year-to">To </label>
  <select class="year-to" id="year-to">
    <option value="default" style="display: none;">Scope Year To</option>
    <option value="19">2019</option>
    <option value="20">2020</option>  
    <option value="21">2021</option>
    <option value="22">2022</option>
  </select>
  <button class="apply-filter" id="apply-filter" onclick="filter()">Apply Filter</button>`;

  if (document.getElementById("filter-popup")) {
    removePopUp();
  } else {
    document.body.appendChild(filterPopUpEl);
  }
};

const filter = () => {
  const selectedType = document.getElementById("type").value;
  const startYear = document.getElementById("year-from").value;
  const endYear = document.getElementById("year-to").value;
  let filterResults;

  if (
    selectedType === "default" &&
    startYear === "default" &&
    endYear === "default"
  ) {
    alert("Use at least one of the filters!");
  } else if (endYear === "default" && startYear === "default") {
    filterResults = researchCardContents.filter(
      (data) => data.type === selectedType
    );
  } else if (selectedType === "default" && endYear === "default") {
    filterResults = researchCardContents.filter(
      (data) => data.year >= startYear
    );
  } else if (selectedType === "default" && startYear === "default") {
    filterResults = researchCardContents.filter((data) => data.year <= endYear);
  } else if (endYear === "default") {
    filterResults = researchCardContents.filter(
      (data) => data.year >= startYear && data.type === selectedType
    );
  } else if (startYear === "default") {
    filterResults = researchCardContents.filter(
      (data) => data.year <= endYear && data.type === selectedType
    );
  } else if (selectedType === "default") {
    filterResults = researchCardContents.filter(
      (data) => data.year >= startYear && data.year <= endYear
    );
    if (startYear > endYear) {
      alert(`Year "FROM" Should Be less Than the Year "TO"`);
      filterResults = researchCardContents;
    }
  } else {
    filterResults = researchCardContents.filter(
      (data) =>
        data.year >= startYear &&
        data.year <= endYear &&
        data.type === selectedType
    );
    if (startYear > endYear) {
      alert(`Year "FROM" Should Be less Than the Year "TO"`);
      filterResults = researchCardContents;
    }
  }

  mainContentEl.innerHTML = filterResults
    .map((data) => {
      const { id, title, author, abstract, date } = data;
      const idSearch =
        viewsStorage.find((data) => id === data.id.toString()) || [];
      const idSearchDownloads =
        downloadStorage.find((data) => id === data.id.toString()) || [];
      return ` <div onclick="getNumberOfViews(${id})" class="research-paper-card" id="research-paper-${id}">
    <div class="card-content">
  <div class="research-title-and-bookmark-container">
    <h2 class="research-title">
      ${title}
    </h2>
    <i id="save-icon-${id}" class="fa-solid fa-bookmark fa-2xl" onclick="savePaper(event,${id})"></i>
  </div>
  <div class ="body">
  <p class="author">${author}</p>
  <p class="abstract">${abstract}</p>
  <p class="date">${date}</p>
  <p class="viewsDownloads">VIEWS: <strong id="views-${id}"> ${
        idSearch.views === undefined ? 0 : idSearch.views
      }</strong> | DOWNLOADS: <strong id="downloads-${id}">${
        idSearchDownloads.downloads === undefined
          ? 0
          : idSearchDownloads.downloads
      }</strong> </p>
  </div>
  </div>
  </div>
  `;
    })
    .join("");

  bookMark();
  removePopUp();
};

const removePopUp = () => {
  document.getElementById("filter-popup").remove();
};

const repositoryIndicator = () => {
  clearNav();
  repositoryNav.classList.add("nav-indicator");
};

const saveNavigator = () => {
  clearNav();
  saveNav.classList.add("nav-indicator");
};

const historyNavigator = () => {
  clearNav();
  historyNav.classList.add("nav-indicator");
};

const clearNav = () => {
  repositoryNav.classList.remove("nav-indicator");
  saveNav.classList.remove("nav-indicator");
  historyNav.classList.remove("nav-indicator");
};
repositoryIndicator();
// ------------------------------     FUNCTIONS    ------------------------------ //
