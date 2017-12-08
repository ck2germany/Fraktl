My initial goal was to render fractals to the screen that a user could interactively manipulate. Fractals being a data set, it seemed simple enough to set variables and then allow the user to adjust key values, creating a new fractal to be viewed. On first research, it is entirely possible to do this in HTMLCanvas in 2D, but it renders slowly and with clunky results.

### Monday
- in depth research of the functions and canvas necessary to make this happen
- apparent that this is not the smooth rendering and coloring that one would expect
- late in the afternoon, suggestion was made to look at WebGL, so I started looking at that
- ill Monday evening, no extra time spent on project

### Tuesday
- was spent looking at three.js, a javascript library for WebGL, which I thought would make things easier
- soon became apparent I didn’t know enough about graphics and rendering. This should have been the point where I realized I needed a new project. I tend to be overly optimistic about my ability to learn, and figured it couldn’t be that hard
- three.js api isn’t that great, but I learned that there is a basic logic to their creation,
- scene
- object
- underlying structure made up of vertices
- overlay called a mesh, which can display colors and textures
- the webgl works out individual colors to display for each pixel under the hood
- shading and color intensity, along with lighting are how 3D effect is achieved
- camera
- lights
- started realizing I would need to write something called a Fragment Shader in order to be able to custom display each pixel as an independent color value. This color value comes from calculations using x and y as part of the fractal functions input values, and that seemed to be actual WebGL

### Wednesday
- found as many webgl tutorials as I could and started reading through what it would take to use WebGL, I would understand more on each find, learning about creating shading programs, vertex buffer objects and using vector objects to store data such as position or a color
- difficulty in finding a source that could explain the overall framework and logic of what order of operations was necessary
- WebGL has a programmable pipeline, which means the user must write programs as part of that pipeline as data is processed before rendering,
- specifically, the vertex shader and fragment shader
- many many examples on how to do complex operations but with simple vertices, nothing to help guide on create an image by setting each color point by point
- during resume peer review in the afternoon, sent a link to an online book on graphics and webgl, started reading

### Thurday
- made it through most of the book, started to realize that this was a complicated procedure, but determined to push on.
- 3D coordinates, transforms
- how objects use individual coord systems that are translated into the whole
- principles of lighting
- also realized it would never be ready in any short time, just understanding the basics of WebGL has proven a challenge

### Friday
- started outlining the knowledge I do have, and the exact steps it will take to create this step by step
- [Outline](outline.txt)
