var = ```
    \documentclass[]{deedy-resume-openfont}
    \usepackage{geometry}
    \usepackage{fontawesome5}
    \usepackage{fancyhdr}
    \usepackage{xcolor}
    \usepackage{pagecolor,lipsum}
    \usepackage[most]{tcolorbox}
    \usepackage[inline]{enumitem}

    \geometry{a4paper, margin=0.35in}

    \definecolor{lightGrey}{HTML}{212121}
    \definecolor{darkGrey}{HTML}{1E1E1E}
    \definecolor{turq}{HTML}{1DDECB}
    \definecolor{whit}{HTML}{E6E6E6}

    \tcbset{on line, 
    boxsep=4pt, left=2pt,right=2pt,top=2pt,bottom=2pt}


    \pagestyle{fancy}
    \fancyhf{}
    \begin{document}
    \pagecolor{darkGrey}

    \renewcommand{\labelitemi}{$\textcolor{turq}{\bullet}$}


    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %
    %     LAST UPDATED DATE
    %
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    % \lastupdated

    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %
    %     TITLE NAME
    %
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    \namesection{\fontsize{24}{16}}{ \color{turq} WERONIKA \color{whit} ZAK}{
    \vspace*{8pt}
    \hspace{0pt}
    \enskip \href{https://github.com/weronikazak}{\tcbox[colframe=turq,colback=turq]{ \color{darkGrey} GITHUB}}
    \hspace{0pt}
    \enskip \href{https://www.linkedin.com/in/weronikawzak}{\tcbox[colframe=turq,colback=turq]{ \color{darkGrey} LINKEDIN}} 
    % \enskip \href{https://www.kaggle.com/imakaruamikurah}{\tcbox[colframe=turq,colback=turq]{ \color{darkGrey} KAGGLE}} 
    \hspace{0pt}
    \hspace{0pt}
    \enskip \href{https://weronikazak.github.io}{\tcbox[colframe=turq,colback=turq]{ \color{darkGrey} PORTFOLIO}}
    \hspace{0pt}
    \enskip \href{mailto: weronika.w.zak@gmail.com}{\tcbox[colframe=whit,colback=darkGrey]{ \color{whit} EMAIL}}
    \hspace{0pt}
    \enskip \href{tel:+447936834292}{\tcbox[colframe=whit,colback=darkGrey]{ \color{whit} PHONE}}
    \vspace*{8pt}
    }

    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %
    %     COLUMN ONE
    %
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    \begin{minipage}[t]{0.49\textwidth} 

    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %     EDUCATION
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    \section{ \quad \quad \quad < Education > }
    \runsubsection{University of Loughborough } \\
    \descript{ \color{turq} | BSc Computer Science and AI}
    \location{2020 - present | Loughborough, United Kingdom}
    % First year finished with \textbf{82.9\%} average. \newline
    First and second years finished with first class honours. \newline
    I was a member of student societies such as:
    \vspace{\topsep}
    \begin{tightemize}
    \item \textbf{Vice Chair} at \textbf{Scandinavian Society}: I helped
    \newline
    in organising Scandinavia related events, spread the culture and helped foreign and Erasmus students 
    \newline
    during their time abroad.
    \item \textbf{Treasurer} at \textbf{CodeLab}: I was responsible for getting 
    \newline
    in touch with Hackathon's sponsors, assisting in 
    \newline
    society labs and helping students in their coding learning.
    \end{tightemize}
    \sectionsep

    \runsubsection{Ryszard Kaczorowski Technical \newline College}
    \runsubsection{}
    \descript{\color{turq} | Technician IT}
    \location{2016 - 2020 | Kielce, Poland}
    Graduated with a distinction. Education ended with 
    \newline
    obtaining Polish technical certificates such as:

    \begin{tightemize}
    \item  \textbf{E12}: Installation and operation of personal
    \newline 
    computers and peripheral devices.
    \item \textbf{E13}: Local computer networks design and
    \newline
    network administration.
    \item \textbf{E14}: Web application creation
    and database administration.
    \end{tightemize}
    \sectionsep



    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %     ACCOMPLISHMENTS
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    \bigskip
    \section{  \quad \quad \quad < Mentioned at > }

    \descript{ \href{https://ethglobal.tv/buildquest-finale-e6eda9b3}{ \textcolor{turq}{\faIcon{link}}} \color{whit} ETHGLOBAL BUILDQUEST 2022 - finalist}
    \sectionsep

    \descript{ \href{https://www.linkedin.com/feed/update/urn:li:activity:6855904305547894785/}{ \textcolor{turq}{\faIcon{link}}} \color{whit} JP MORGAN HACKATHON 2021 - 1st place}
    \sectionsep

    \descript{ \href{https://developers.google.com/community/dsc-solution-challenge/winners}{ \textcolor{turq}{\faIcon{link}}} \color{whit} GOOGLE SOLUTION CHALLENGE 2021 - top 50}
    \sectionsep


    % \descript{ \href{https://developers.google.com/certification/directory/tensorflow}{ \textcolor{turq}{\faIcon{link}}} \color{whit} TENSORFLOW CERTIFICATE NETWORK}
    % \sectionsep

    % \runsubsection{Stipendium for EXCELLENT MARKS (thrice)}
    % \descript {\color{turq}
    % \href{http://www.stypendia.sejmik.kielce.pl/swietokrzyski-program-stypendialny-dla-uczniow-szkol-zawodowych-archiwum-edycji-ii/aktualnosci/item/50-lista-uczniow-uczennic-zakwalifikowanych-do-stypendium-w-ramach-swietokrzyskiego-programu-stypendialnego-dla-uczniow-szkol-zawodowych}{ \faIcon{link}}
    % \hspace{0pt}
    % \href{http://www.stypendia.sejmik.kielce.pl/swietokrzyski-program-stypendialny-dla-uczniow-szkol-zawodowych-archiwum-edycji-iii/aktualnosci/item/73-lista-uczniow-uczennic-zakwalifikowanych-do-stypendium-w-ramach-swietokrzyskiego-programu-stypendialnego-dla-uczniow-szkol-zawodowych}{ \faIcon{link}}
    % \hspace{0pt}
    % \href{http://www.stypendia.sejmik.kielce.pl/swietokrzyski-program-stypendialny-dla-uczniow-szkol-zawodowych-archiwum-edycji-iv/aktualnosci/item/93-lista-uczniow-uczennic-zakwalifikowanych-do-stypendium-w-ramach-swietokrzyskiego-programu-stypendialnego-dla-uczniow-szkol-zawodowych}{ \faIcon{link}}
    % }
    % \sectionsep

    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %     SKILLS
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    \bigskip
    \section{ \quad \quad \quad < Skills \& Tools > }
    \subsection{Actively using:}
    \begin{itemize*}
        \item Python
        \item Tensorflow
        \item Jupyter Notebook
        \newline
        \item Flask
        \item Sklearn
        \item JavaScript
        \item Node.js
    \end{itemize*}
    \sectionsep

    \subsection{Familiar with:}
    \begin{itemize*}
        \item Solidity
        \item React
        \item Linux
        \item Keras
        \item C/C++
        \newline
        \item .NET Core
        \item Angular
        \item Java
        \item Dart
    \end{itemize*}
    \sectionsep

    \subsection{Interested in:}
    \begin{itemize*}
        \item Smart Contracts
        \item Blockchain
        % \item Next stage of interview with IBM
        \item Virtual Reality
    \end{itemize*}
    \sectionsep



    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %     CERTIFICATIONS
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    \bigskip
    \section{ \quad \quad \quad < Certifications > }

    \descript{ \href{https://www.coursera.org/account/accomplishments/specialization/certificate/T4TGNVRSPQXE}{ \textcolor{turq}{\faIcon{link}}} \color{whit} TENSORFLOW DEVELOPER}
    \sectionsep

    \descript{ \href{http://coursera.org/verify/specialization/4983HQ7FNC2V}{ \textcolor{turq}{\faIcon{link}}} \color{whit} DEEP LEARNING SPECIALIZATION}
    \sectionsep

    \descript{ \href{https://www.coursera.org/account/accomplishments/specialization/certificate/Q2HYQ66WW9RL}{ \textcolor{turq}{\faIcon{link}}} \color{whit} IBM DATA SCIENCE}
    \sectionsep

    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %
    %     COLUMN TWO
    %
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    \end{minipage} 
    \hfill
    \begin{minipage}[t]{0.48\textwidth} 

    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %     Work Experience
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    \section{ \quad \quad < Work Experience >}

    \runsubsection{JP MORGAN CHASE \& CO}
    \descript{\color{turq} | data science intern }
    \location{June 2022 – present | Glasgow, United Kingdom }
    \vspace{8pt}
    \begin{tightemize}
    \item I analysed and visualised data from the company's data servers to determine the system's performance.
    \item I was in charge of cleansing the data and extracting value from the company's infinite logs.
    \item I was exposed to many graphing, and programming tools, as well as software helping in managing big data.
    \end{tightemize}
    \sectionsep

    \runsubsection{INTELLIGENT VOICE}
    \descript{\color{turq} | data searcher }
    \location{April 2021 – October 2021 | remote, United Kingdom }
    \begin{tightemize}
    \item I collected data in different languages (e.g. Polish, Norwegian) in order to train voice recognition models.
    \item I made sure the used data is clean, correct, and updated.
    \end{tightemize}
    \sectionsep

    \runsubsection{ITM Code}
    \descript{\color{turq} | software engineering intern }
    \location{May 2019 - July 2019 | Kielce, Poland}
    \begin{tightemize}
    \item I modified existing software to correct coding errors 
    \newline
    and improve overall performance.
    \item I participated in meetings and consultations to collect clients' requirements and ensure project quality.
    \item I designed and co-created the company's representative page using .NET framework tools.
    \end{tightemize}
    \sectionsep

    % \runsubsection{CINEL}
    % \descript{\color{turq} | Technology trainee }
    % \location{March 2019 - April 2019 | Lisbon, Portugal}
    % \begin{tightemize}
    % \item I participated in micro-welding and programming for 
    % \newline
    % tiny devices classes,
    % \item I was introduced to drone programming in Python language and assisted with coding a functionality,
    % \item I engaged in classes on robotics, cybernetics and the automation process of electronic devices,
    % \end{tightemize}
    % \sectionsep


    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %     PROJECTS
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    \section{\quad \quad \quad \quad < Projects > }

    \runsubsection{ NF3D }
    \descript{\color{turq} | Web3, Smart Contracts \href{https://github.com/weronikazak/NF3D-Hackathon}{ \faGithub}}
    NFT 2D to 3D generator. Allows users to make their own 3D models to be used as game avatars using AI. Chose as top 10 projects in the BuildQuest hackathon.
    \sectionsep


    \runsubsection{ BrandAid }
    \descript{\color{turq} | Web3, Smart Contracts \href{https://github.com/jaylah-consejo/BrandAid}{ \faGithub}}
    ETHGlobal Web To Road 3 hackathon project. An app easing brand integration into Web 3.0. platforms and setting a campaign. Won Polygon Pool Prize.
    \sectionsep

    \runsubsection{ How Are You? }
    \descript{\color{turq} | Mobile
    \href{https://github.com/weronikazak/Google_Solution_Challenge}{ \faGithub}}
    Google Solution Challenge 2021 Project. An app to connect homeless shelters with people in need.
    \sectionsep

    % \runsubsection{ MAXZ }
    % \descript{\color{turq} | Web3, Smart Contracts \href{https://github.com/The-MAXZ-Project}{ \faGithub}}
    % Moralis x Avalache hackathon project. Web 3.0 application with smart contract integration rewarding users for watching adverts and campaigns.
    % \sectionsep


    % \runsubsection{Waste Classifier}
    % \descript{\color{turq} | Computer Vision, NN \href{https://github.com/weronikazak/Handy-Trash-Classifier}{ \faGithub}}
    % I modelled, trained and deployed a multilayered neural network model with ~94\% accuracy in recognizing and classifying six different types of waste to Android app.
    % \sectionsep

    % \runsubsection{ Cars Comparison }
    % \descript{\color{turq} | Data Science \href{https://github.com/weronikazak/cars-price-comparison}{ \faGithub}}
    % I analysed and visualised personally scraped data from international vehicle selling websites. Notebooks with graphs are available both in R and Python languages. 
    % \sectionsep

    \runsubsection{ Social Media Posts Analysis }
    \descript{\color{turq} | NLP \href{https://github.com/weronikazak/depression-tweets}{ \faGithub}}
    I scraped ~20 000 posts from Twitter and analysed linguistic markers in order to build a neural network that predicts depressive tendences with ~98\% accuracy.
    \sectionsep

    \runsubsection{ Business Analysis }
    \descript{\color{turq} | Data Science \href{https://github.com/weronikazak/South-North-Clustering}{ \faGithub}}
    Capstone Project from the IBM Data Science course. 
    \newline
    I grouped the municipalities of Rome and Oslo with their neighborhoods and analysed what kind of business is beneficial there.
    \sectionsep

    % \runsubsection{ Rock-Paper-Scissor }
    % \descript{\color{turq} | Computer Vision \href{https://github.com/weronikazak/AI-rock-paper-scissors}{ \faGithub}}
    % Using Tensorflow Object Detection API, I created and trained NN for detecting and recognizing 5 different gestures and deployed the model to Pygame app.
    % \sectionsep


    \runsubsection{Screenshot to Text}
    \descript{\color{turq} | Computer Vision \href{https://github.com/weronikazak/Yet-Another-OCR}{ \faGithub}}
    Flask web application that extracts text from uploaded image files. The text can be freely modified and saved to three different file extensions (PDF, TXT and DOCX).
    \sectionsep


    \end{minipage} 
    \end{document}  \documentclass[]{article}
```;