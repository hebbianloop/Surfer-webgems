# Surfer-webgems
Automated Web Reports for Surfer Gems Programs

## Installation & Usage
You can automatically generate a web report summary of your FreeSurfer dataset and host it on your own domain using GitHub Pages to share your results with your team and the world (if you so choose!). 

### 1. Fork and clone this repo
Click the fork button at the top right of this webpage, then open a terminal on your computer and clone your fork into a folder of your own naming choice by typing:
`git clone https://github.com/githubusername/Surfer-webgems.git ${HOME}/My-Surfer-webgems.git`

_What does this mean?_ A fork just creates a copy of this template on your own GitHub account so you can upload and host data to it!

### 2. Configure GitHub Pages for your fork
Click the Settings tab in the top right of your fork's github page. Navigate to the GitHub Pages section and enable the Source from the master/docs branch.

### 3. Clone the Surfer-gems repository 
On your terminal, type
`git clone https://github.com/seldamat/Surfer-gems.git ${HOME}/Surfer-gems`

### 4. Run Surfer-gems webreport
Next run the web-report command. Make sure to specify the path to the fork you cloned in step 1. Here we named it 'My-Surfer-webgems' and cloned it to the home directory.. i.e)
`~/Surfer-gems/check-recons --web-report -wrd ${HOME}/My-Surfer-webgems`

A preview of the report's home page will automtically open in your default browser when the program is done running (might take a while).

### 5. Run Surfer-gems webreport
Once everything checks out OK, you can publish your results by typing)
`~/Surfer-gems/check-recons --pub-web-report`

### 6. View your product
Navigate to https://gitusername.github.io/My-Surfer-webgems to see the published web version

