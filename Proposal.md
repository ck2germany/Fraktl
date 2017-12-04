## Background and Overview

#### What are fractals? 
- A fractal shows self-similarity at scale, that is, smaller sections of it resemble the whole, either exactly or to varying degrees
- The representation of certain mathematical formulas results in stunning fractals
- Zooming in results in a new representation, just as detailed as its parent

#### How Fraktl works
- Users are presented with the basic Mandelbrot Set, and are able to click to zoom further in or out
- Preset color palettes to help visualize patterns
- Preset calculation zooms to show off distinct features
- User input to define calculation behavior


## Functionality and MVP
In Fraktl, users will be able to:
- [ ] View, click and zoom basic mandelbrot set 
- [ ] Choose various color palettes to customize the pattern
- [ ] Choose various zoom presets to view special patterns
- [ ] Interact with controls to create custom patterns

![Wiki](https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Mandel_zoom_00_mandelbrot_set.jpg/320px-Mandel_zoom_00_mandelbrot_set.jpg)

This project will also include: 
- [ ] An about modal detailing the mathematical concept of a fractal
- [ ] A "How do I" modal explaining the controls

## Wireframes
Fraktl will be a single page app with the following components:
- [ ] Navbar with logo, buttons for the modals (Fractals, How-To)
- [ ] Left control panel with buttons and input fields
- [ ] Main Display section with the rendered image

![Main](https://raw.githubusercontent.com/ck2germany/Fraktl/master/Wireframes/Frktl_Main.png)

![Modal](https://raw.githubusercontent.com/ck2germany/Fraktl/master/Wireframes/Frktl_Modal.png)

## Technologies
- Vanilla JS
- Canvas for rendering
- Webpack for script bundling

## Timeline
#### Weekend
- research fractals and the mathematics involved
- visit various fractal creation pages to get a feel for them

#### Monday
- set up project skeleton and files
- create basic rendering, display and zooming
- ensure thorough understanding of mathematics behind rendering

#### Tuesday
- finish basic implementation
- spend time examining how to best provide custom interaction
- build up components around main render, css styling

#### Wednesday 
- select color palettes and sample views
- set up custom display configurations/buttons
- start implementation of custom views

#### Thursday
- finish up custom views
- write text for modal screen
- final css optimization

## Bonus Features
- Selection rectangle as input for next zoom view
- Additional pattern equations such as Burning Ship, Koch Curve, Sierpinski Triangle
- HTML ColorPicker for custom palette creation




