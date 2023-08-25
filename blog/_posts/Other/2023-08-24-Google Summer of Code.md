---
layout: post
title:  "Google Summer of Code 2023"
date:   2023-08-24 16:10:35 +0100
tags:
- other
description: "Overfitting arises when a hypothesis function is too complex, while underfitting occurs when it's too simple. To address overfitting, we can manually select features or use regularization to reduce the weight of some terms in the function. Regularization works well when we have a lot of slightly useful features."
image: 'images/posts/Other/gsoc/gsoc.png'

---


## Implementation of GAMESS .dat and NBO Parsers 

<center>
<img src="/images/posts/Other/gsoc/cc.jpg">
</center>

## Description
cclib is an open source library, written in Python, for parsing and interpreting the results of computational chemistry packages. The goals of cclib include extracting data from different files, creating an interface for computational chemistry results, facilitating the use of universal algorithms, and ensuring easy collaboration with other open source chemistry software. 

The aim of my GSoC project was to create two parsers for this library. These parsers were meant to extract attributes from GAMESS .dat and NBO files. While these formats had been previously requested by chemistry engineers, there was a lack of support for them. This is the problem I chose to work on this summer.

## What I Accomplished

- #### GAMESS .dat Parser Creation
My first task was to create a parser for the GAMESS .dat files. With the help of my mentors, I was able to identify which parts of the generated files contained important data and which attributes they corresponded to. Once we were certain that we had extracted everything possible, I proceeded to test the parser, and it was deployed in the latest release.

- #### NBO Parser Creation
Compared to the previous GAMESS .dat parser, working on the NBO parser was more challenging. There wasn't a lot of information available to link existing attributes, so I had to create new custom ones and develop a dedicated testing class for them. I also needed to upgrade some utility functions. Thankfully, with the guidance of my mentors, I was able to successfully make it work.

- #### Making some features in the cclib library more useful
During the development of the parsers mentioned above, I encountered some issues related to testing and utility functions. They weren't compatible with my approach, so I needed to create additional functions or conditions. These adjustments included introducing a new extractable attribute for the NBO parser, adding an extra parameter to an existing function that works with two-dimensional arrays, and creating a method to test attributes that are dictionary of dictionaries.

## Pull Requests
-	[Add a parser for GAMESS .dat](https://github.com/cclib/cclib/pull/1208)
-	[Parser for Gamess .dat - continuation and fixes](https://github.com/cclib/cclib/pull/1214)
-	[Add optional index parameter to extend_attribute](https://github.com/cclib/cclib/pull/1228)
-	[Little fixes to the Gamess .dat parser](https://github.com/cclib/cclib/pull/1229)
-	[Parser for NBO files](https://github.com/cclib/cclib/pull/1233)
-	[NBO Parser: Mapping extracted values to attributes](https://github.com/cclib/cclib/pull/1244)
-	[Create and test new attributes for the NBO parser](https://github.com/cclib/cclib/pull/1251)
-	[Add attribute _dictofdicts](https://github.com/cclib/cclib/pull/1258)


## Current State
The GAMESS .dat parser is now in the newest version of the library, which at the time of writing is 1.8.0. The NBO parser is mostly done and will be released in the next version.

## Remaining Tasks
Although the main goals have been achieved, certain functions or attributes were too complex for me to extract given my understanding of the subject. These aspects will probably need to be handled by experts in the field.

## Code Merged Upstream
The parsers I made are now part of the main library. The GAMESS .dat parser is already released, and the NBO parser will be added soon.

## What I Learnt

- #### Open-Source Software Development
I improved my skills in building tools like parsers, which help extracting important data from complex files.
- #### Finding Important Data
I learnt to navigate and locate important data within specific types of files, such as GAMESS .dat and NBO files. With the help of mentors and documentation, I connected them to the right attributes.
- #### Collaboration
I learnt how teamwork can solve problems and make work go smoother.

## Challenges I Faced

My major difficulty was linked to my understanding of the subject. I needed to heavily depend on my mentors and their expertise in the field to assist me in identifying and comprehending the values I was extracting.

## Conclusion

Being part of GSoC and helping out with the cclib project was a great experience. I genuinely hope that the work I did will make cclib even more useful for chemistry engineers, students and researchers. I'm excited to see the project grow in the future.

Big thanks to GSoC, cclib, and my mentors - Amanda, Eric and Shiv for their patience, guidance and help! 😊