define([],function(){var t;return t=function(){return _.extend(this,Backbone.Events)},t.prototype.getDefaultData=function(t,e){var a,s,l,d,n,i,c=this.rawData[t];if(n={},c=JSON.stringify(c),c=$.parseJSON(c),c.id=c.type+"_"+this.getUniqueNumber(),c.data.styleClass=c.id,a=this.getChildComponentList([c],0),a.length>1){for(s=Number(e.split("_")[1]),i=s,l=1;l<a.length;l+=1)s+=1,d=a[l].type+"_"+this.getUniqueNumber(),"SCQ"===t&&"radio"===a[l].type&&(a[l].data.name="scq"+i),a[l].id=d,a[l].data.styleClass=d;n.compCount=a.length-1,n.arrayComp=a}return n.JsonData=c,n},t.prototype.getUniqueNumber=function(){var t,e,a=(new Date).getTime();return e="xxxxxxxx_xx".replace(/[xy]/g,function(e){return t=(a+16*Math.random())%16|0,a=Math.floor(a/16),("x"===e?t:3&t|8).toString(16)})},t.prototype.prepareExistingData=function(t,e){var a,s,l,d=0,n={};if(a=JSON.stringify(t.filteredData.jsonElement),a=$.parseJSON(a),s=this.getChildComponentList([a],0),e===!1||void 0===e)for(d=0;d<s.length;d+=1)l=s[d].type+"_"+this.getUniqueNumber(),s[d].id=l,s[d].data.styleClass=l;return n.compJSON=a,n.arrayComp=s,n},t.prototype.getChildComponentList=function(t,e,a,s){var l,d=t[e];return l=a,void 0===l&&(l=[]),d.parentObject={parentId:s},l.push(d),void 0!==d.components&&d.components.length>0&&this.getChildComponentList(d.components,0,l,d.id),e+=1,t.length>e?this.getChildComponentList(t,e,l,s):l},t.prototype.rawData={HINT:{id:"",type:"hint",state:"attached",data:{styleClass:"",time:""},events:[],components:[{id:"",type:"label",data:{text:"Hint Text",styleClass:""},parentObject:{}}],html:{align:"center"}},TAB:{id:"",type:"tab",state:"attached",data:{styleClass:"",view:"",index:""},events:[],components:[],html:{align:"center"}},DROPDOWN:{id:"",type:"dropdown",state:"attached",data:{styleClass:""},html:{align:"left"}},FLIPCARD:{id:"",type:"flipcard",state:"attached",data:{styleClass:"hi",view:"front-face",movement:"horizontal",value:""},events:[],components:[{id:"",type:"case",state:"attached",data:{styleClass:""},html:{align:"left"}},{id:"",type:"case",state:"attached",data:{styleClass:""},html:{align:"left"}}],html:{align:"center"}},DRAGGABLE:{id:"",type:"draggable",state:"attached",data:{styleClass:"",value:"",clone:"false"},components:[],html:{align:"center"}},DROPPABLE:{id:"",type:"droppable",state:"attached",data:{styleClass:"",value:""},components:[],html:{align:"center"}},IMAGE:{id:"",type:"image",data:{styleClass:"",src:""},html:{align:"center",alt:"image"}},CASE:{id:"",type:"case",state:"attached",data:{styleClass:""},html:{align:"left"}},PELMANISM:{id:"",type:"pelmanism",state:"attached",data:{styleClass:""},html:{align:"left"}},CANVAS:{id:"",type:"canvas",state:"attached",data:{styleClass:"",canvascolor:"#efefef"},html:{}},DRAWINGBUTTON:{id:"",type:"drawingbutton",state:"attached",data:{label:"Drawing Button",styleClass:"",brushcolor:"black",brushwidth:"1",linked:"",imgurl:"",tool:""},html:{}},COLORPICKER:{id:"",type:"colorpicker",state:"attached",data:{styleClass:"",linked:"",defaultcolor:"black",colorlist:"black,red,green,blue,pink"},html:{}},POPUP:{id:"",type:"popup",state:"attached",data:{styleClass:"","default":"show"},html:{align:"center"}},COLOR:{id:"",type:"coloraccessibility",state:"attached",data:{styleClass:"",view:"horizontal"},html:{align:"left"},components:[{id:"",type:"button",state:"attached",data:{label:"Gray",toggle:"false",styleClass:"",stylelist:{over:"over",active:"active",disabled:"disabled",selected:"selected"}},events:[],html:{align:"center"}},{id:"",type:"button",state:"attached",data:{label:"Invert",toggle:"false",styleClass:"",stylelist:{over:"over",active:"active",disabled:"disabled",selected:"selected"}},events:[],html:{align:"center"}},{id:"",type:"button",state:"attached",data:{label:"Color",toggle:"false",styleClass:"",stylelist:{over:"over",active:"active",disabled:"disabled",selected:"selected"}},events:[],html:{align:"center"}}]},ANSWER:{id:"",type:"answer",state:"attached",data:{answer:"",styleClass:""},components:[]},TEXTEDITOR:{id:"",type:"texteditor",state:"attached",data:{styleClass:"",vBold:"false",vItalic:"false",vUnderline:"false",vBulletlist:"false",vSortedlist:"false",vSup:"false",vSub:"false",vCut:"false",vCopy:"false",vPaste:"false"},components:[]},LABEL:{id:"",type:"label",data:{text:"Label",styleClass:""}},BUTTON:{id:"",type:"button",data:{label:"Button",toggle:"false",styleClass:"",stylelist:{over:"over",active:"active",disabled:"disabled",selected:"selected"}},events:[],html:{align:"center"}},RADIO:{id:"",type:"radio",data:{subType:"",styleClass:"",name:"",value:"",checked:"false",view:"radio",defaultimgpath:"",selectedimgpath:"",width:"",height:""},events:[]},MULTIPLECHOICE:{id:"",type:"multiplechoice",state:"attached",data:{styleClass:"",attempts:"",shuffle:""},events:[],components:[],html:{align:"center"}},INPUTTEXT:{id:"",type:"inputtext",state:"attached",data:{styleClass:"",text:"Text"},events:[],components:[]},FEEDBACK:{id:"",type:"feedback",state:"attached",data:{styleClass:""},events:[],components:[],html:{align:"center"}},AUDIOHOTSPOT:{id:"",type:"audiohotspot",data:{styleClass:"",hidden:"false",passiveaudio:"false",source:[{path:"",type:"mp3"},{path:"",type:"ogg"}]}},VIDEO:{id:"",type:"videoplayer",data:{styleClass:"",passivevideo:"false",source:[{path:"",type:"mp4"},{path:"",type:"ogv"}],width:"100%",height:"100%"}},WIZARD:{id:"",type:"wizard",data:{styleClass:"","default":0},components:[{id:"",type:"label",data:{text:"Label",styleClass:""}}],events:[{changeWizardView:[{target:"self",method:"changeWizardView"}]}]},LIFE:{id:"",type:"life",data:{styleClass:"","default":"",stylelist:{over:"over",active:"active",disabled:"disabled",selected:"selected"}},components:[{id:"",type:"label",data:{text:"Label",styleClass:""}}]},LIVES:{id:"",type:"lives",data:{styleClass:"","default":""},parentObject:{},components:[{id:"",type:"life",data:{styleClass:"","default":""},parentObject:{}},{id:"",type:"life",data:{styleClass:"","default":""},parentObject:{}},{id:"",type:"life",data:{styleClass:"","default":""},parentObject:{}}]},IMAGEPUZZLE:{id:"",type:"imagepuzzle",state:"attached",data:{styleClass:""},html:{align:"left"},components:[{id:"",type:"image",data:{styleClass:"",src:""},html:{align:"left"}},{id:"",type:"case",state:"attached",data:{styleClass:""},html:{align:"left"}}]},MCQ:{id:"",type:"case",state:"attached",data:{styleClass:""},html:{align:"left"},components:[{id:"",type:"case",state:"attached",data:{styleClass:""},html:{align:"left"},components:[{id:"",type:"label",data:{text:"Click on label and type 'question text' in its property panel.",styleClass:""}},{id:"",type:"image",data:{styleClass:"",src:""},html:{align:"center"}}]},{id:"",type:"multiplechoice",state:"attached",data:{styleClass:"",attempts:"",shuffle:""},events:[],components:[{id:"",type:"answer",state:"attached",data:{answer:"",styleClass:""},components:[{id:"",type:"radio",data:{styleClass:"",name:"",value:"",checked:"false",view:"checkbox"},events:[]},{id:"",type:"label",data:{text:"Option 1",styleClass:""}},{id:"",type:"image",data:{styleClass:"",src:""},html:{align:"center"}}]},{id:"",type:"answer",state:"attached",data:{answer:"",styleClass:""},components:[{id:"",type:"radio",data:{styleClass:"",name:"",value:"",checked:"false",view:"checkbox"},events:[]},{id:"",type:"label",data:{text:"Option 2",styleClass:""}},{id:"",type:"image",data:{styleClass:"",src:""},html:{align:"center"}}]},{id:"",type:"answer",state:"attached",data:{answer:"",styleClass:""},components:[{id:"",type:"radio",data:{styleClass:"",name:"",value:"",checked:"false",view:"checkbox"},events:[]},{id:"",type:"label",data:{text:"Option 3",styleClass:""}},{id:"",type:"image",data:{styleClass:"",src:""},html:{align:"center"}}]},{id:"",type:"answer",state:"attached",data:{answer:"",styleClass:""},components:[{id:"",type:"radio",data:{styleClass:"",name:"",value:"",checked:"false",view:"checkbox"},events:[]},{id:"",type:"label",data:{text:"Option 4",styleClass:""}},{id:"",type:"image",data:{styleClass:"",src:""},html:{align:"center"}}]},{id:"",type:"feedback",state:"attached",data:{styleClass:""},events:[],components:[{id:"",type:"label",data:{text:"Well Done! All Correct!!!!",styleClass:""}},{id:"",type:"label",data:{text:"Try Again!!!!",styleClass:""}}],html:{align:"left"}}]}]},MATCHINGCHILD:{id:"",type:"matchingChild",state:"attached",data:{styleClass:"",answer:"",category:"question"},html:{align:"left"}},MATCHING:{id:"",type:"case",state:"attached",data:{styleClass:""},html:{align:"left"},components:[{id:"",type:"label",data:{text:"Match The Following Items.",styleClass:""},html:{align:"left"}},{id:"",type:"case",state:"attached",data:{styleClass:""},components:[{id:"",type:"matching",state:"attached",data:{styleClass:"",lineColor:"rgb(128, 128, 128)",lineWidth:"",leftCoordinate:"",rightCoordinate:"",topCoordinate:"",incorrectlineColor:""},components:[{id:"",type:"matchingChild",data:{styleClass:"",answer:"",category:"question"}},{id:"",type:"matchingChild",data:{styleClass:"",answer:"",category:"answer"}},{id:"",type:"case",state:"attached",data:{styleClass:""},html:{align:"left"}},{id:"",type:"matchingChild",data:{styleClass:"",answer:"",category:"question"}},{id:"",type:"matchingChild",data:{styleClass:"",answer:"",category:"answer"}},{id:"",type:"case",state:"attached",data:{styleClass:""},html:{align:"left"}},{id:"",type:"matchingChild",data:{styleClass:"",answer:"",category:"question"}},{id:"",type:"matchingChild",data:{styleClass:"",answer:"",category:"answer"}},{id:"",type:"case",state:"attached",data:{styleClass:""},html:{align:"left"}},{id:"",type:"feedback",state:"attached",data:{styleClass:""},components:[{id:"",type:"label",data:{text:"Well Done! All Correct!!!!",styleClass:""}},{id:"",type:"label",data:{text:"Try Again!!!!",styleClass:""}}],html:{align:"left"}}]}]}]},FIB:{id:"",type:"case",state:"attached",data:{styleClass:""},html:{align:"left"},components:[{id:"",type:"label",data:{text:"Click on label and type 'question text' in its property panel.",styleClass:""}},{id:"",type:"multiplechoice",state:"attached",data:{styleClass:"",attempts:""},events:[],components:[{id:"",type:"answer",state:"attached",data:{answer:"",styleClass:""},components:[{id:"",type:"label",data:{text:"Add option text ",styleClass:""}},{id:"",type:"inputtext",state:"attached",data:{styleClass:""},events:[],components:[]},{id:"",type:"label",data:{text:" here.",styleClass:"LABEL_33"}}]},{id:"",type:"answer",state:"attached",data:{answer:"",styleClass:""},components:[{id:"",type:"label",data:{text:"Add option text ",styleClass:""}},{id:"",type:"inputtext",state:"attached",data:{styleClass:""},events:[],components:[]},{id:"",type:"label",data:{text:" here.",styleClass:""}}],parentObject:{}},{id:"",type:"answer",state:"attached",data:{answer:"",styleClass:""},components:[{id:"",type:"label",data:{text:"Add option text ",styleClass:""}},{id:"",type:"inputtext",state:"attached",data:{styleClass:""},events:[],components:[]},{id:"",type:"label",data:{text:" here.",styleClass:""}}],parentObject:{}},{id:"",type:"answer",state:"attached",data:{answer:"",styleClass:""},components:[{id:"",type:"label",data:{text:"Add option text ",styleClass:""}},{id:"",type:"inputtext",state:"attached",data:{styleClass:""},events:[],components:[]},{id:"",type:"label",data:{text:" here.",styleClass:""}}]},{id:"",type:"feedback",state:"attached",data:{styleClass:""},events:[],components:[{id:"",type:"label",data:{text:"Well Done! All Correct!!!!",styleClass:""}},{id:"",type:"label",data:{text:"Try Again!!!!",styleClass:""}}],html:{align:"left"}}]}]},SCQ:{id:"",type:"case",state:"attached",data:{styleClass:"case_dfdb6e12_24"},html:{align:"left"},components:[{id:"",type:"label",data:{text:"Click on label and type 'question text' in its property panel.",styleClass:""}},{id:"",type:"multiplechoice",state:"attached",data:{styleClass:"",attempts:""},events:[],components:[{id:"",type:"answer",state:"attached",data:{answer:"",styleClass:""},components:[{id:"",type:"radio",data:{styleClass:"",name:"",value:"",checked:"false",view:"radio"},events:[]},{id:"",type:"label",data:{text:"Option 1",styleClass:""}}]},{id:"",type:"answer",state:"attached",data:{answer:"",styleClass:""},components:[{id:"",type:"radio",data:{styleClass:"",name:"",value:"",checked:"false",view:"radio"},events:[]},{id:"",type:"label",data:{text:"Option 2",styleClass:""}}]},{id:"",type:"answer",state:"attached",data:{answer:"",styleClass:""},components:[{id:"",type:"radio",data:{styleClass:"",name:"",value:"",checked:"false",view:"radio"},events:[]},{id:"",type:"label",data:{text:"Option 3",styleClass:""}}]},{id:"",type:"answer",state:"attached",data:{answer:"",styleClass:""},components:[{id:"",type:"radio",data:{styleClass:"",name:"",value:"",checked:"false",view:"radio"},events:[]},{id:"",type:"label",data:{text:"Option 4",styleClass:""}}]},{id:"",type:"feedback",state:"attached",data:{styleClass:""},events:[],components:[{id:"",type:"label",data:{text:"Well Done! All Correct!!!!",styleClass:""}},{id:"",type:"label",data:{text:"Try Again!!!!",styleClass:""}}],html:{align:"left"}}]}]},DnD:{id:"",type:"case",state:"attached",data:{styleClass:""},html:{align:"left"},components:[{id:"",type:"label",data:{text:"Following are some draggable text items. Place items to correct color holder.......",styleClass:""}},{id:"",type:"dnd",parentId:"",data:{styleClass:"",cloning:"false",ondropalignment:"CENTER",attempts:""},components:[{id:"",type:"draggable",state:"attached",data:{styleClass:"",clone:"false",value:""},components:[{id:"",type:"label",data:{text:"Green",styleClass:""}}],html:{align:"center"}},{id:"",type:"draggable",state:"attached",data:{styleClass:"",clone:"false",value:""},components:[{id:"",type:"label",data:{text:"Grey",styleClass:""}}],html:{align:"center"}},{id:"",type:"draggable",state:"attached",data:{styleClass:"",clone:"false",value:""},components:[{id:"",type:"label",data:{text:"Orange",styleClass:""}}],html:{align:"center"}},{id:"",type:"draggable",state:"attached",data:{styleClass:"",clone:"false",value:""},components:[{id:"",type:"label",data:{text:"Pink",styleClass:""}}],html:{align:"center"}},{id:"",type:"droppable",state:"attached",data:{styleClass:"",value:""},components:[],html:{align:"center"}},{id:"",type:"droppable",state:"attached",data:{styleClass:"",value:""},components:[],html:{align:"center"}},{id:"",type:"droppable",state:"attached",data:{styleClass:"",value:""},components:[],html:{align:"center"}},{id:"",type:"droppable",state:"attached",data:{styleClass:"",value:""},components:[],html:{align:"center"}}],html:{align:"left"}}]},DragDrop:{id:"",type:"case",state:"attached",data:{styleClass:""},html:{align:"left"},components:[{id:"",type:"label",data:{text:"Drag the color boxes to their matching color droppables",styleClass:""}},{id:"",type:"dnd",parentId:"",data:{styleClass:"",cloning:"false",ondropalignment:"HORIZONTAL",type:"MANY_TO_ONE"},components:[{id:"",type:"draggable",state:"attached",data:{styleClass:"",value:"",clone:"false"},components:[],html:{align:"center"}},{id:"",type:"draggable",state:"attached",data:{styleClass:"",value:"",clone:"false"},components:[],html:{align:"center"}},{id:"",type:"draggable",state:"attached",data:{styleClass:"",value:"",clone:"false"},components:[],html:{align:"center"}},{id:"",type:"draggable",state:"attached",data:{styleClass:"",value:"",clone:"false"},components:[],html:{align:"center"}},{id:"",type:"droppable",state:"attached",data:{styleClass:"",value:""},components:[],html:{align:"center"}},{id:"",type:"droppable",state:"attached",data:{styleClass:"",value:""},components:[],html:{align:"center"}},{id:"",type:"hint",state:"attached",data:{styleClass:"",time:""},events:[],components:[{id:"",type:"label",data:{text:"Hint Text",styleClass:""}}],html:{align:"center"}},{id:"",type:"feedback",state:"attached",data:{styleClass:""},events:[],components:[{id:"",type:"label",data:{text:"Well Done! All Correct!!!!",styleClass:""}},{id:"",type:"label",data:{text:"Try Again!!!!",styleClass:""}}],html:{align:"left"}}],html:{align:"center"}}]},COUNTDOWNTIMER:{id:"",type:"countdown-timer",state:"attached",data:{styleClass:"",decrementalcountdown:"true",totalseconds:"30",warningafter:"5",timeformat:"2",timerseperator:":",tickrate:"1000",dispatchheartbeat:"false",heratbeattimeinterval:"5",clockmode:"false"},events:[],html:{align:"center"}},ANIMATION:{id:"",type:"animation",state:"attached",data:{styleClass:"",animation:[],speed:"",continuous:"true",dindex:""},events:[],parentObject:{},html:{align:"center"}},ANIMATIONPLAYER:{id:"",type:"animation-player",parentId:"",data:{styleClass:"",bLoop:"false",bReverse:"false",spriteWidth:"100"},events:[]},STICKYNOTES:{id:"",type:"stickynotes",data:{styleClass:"",InputstyleClass:""},components:[{id:"",type:"stickytitlebar",data:{styleClass:"",closebtnclass:""},html:{align:"left"}}],html:{align:"left"}},SORTABLE:{id:"",type:"sortable",state:"attached",data:{styleClass:"",value:""},components:[{id:"",type:"label",data:{text:"label",styleClass:""}}]},MPATHANIMATOR:{id:"",type:"mpathanimator",state:"attached",data:{path:"M6.426,79.957c0,11.458,1.996,19,14.175,19s14.513,3.233,14.513,13.992c0,6.656-0.397,14.008-13.284,14.008c-9.987,0-15.716,7.74-15.716,13.369c0,21.011,0,61.556,0,82.832c0,5.765,4.383,13.8,15.54,13.8c8.249,0,18.337,0,26.498,0c7.93,0,14.962,6.735,14.962,13.752c0,21.643,0,63.35,0,84.411c0,6.236,6.625,12.837,13.29,12.837c26.493,0,85.584,0,111.78,0c8.115,0,12.93-6.952,12.93-13.364c0-21.212,0-62.342,0-83.445c0-8.199,3.521-13.191,13.918-13.191c10.265,0,14.082,6.601,14.082,13.103c0,26.36,0,85.56,0,112.314c0,5.3-3.583,13.583-12.941,13.583c-21.146,0-62.868,0-84.055,0c-5.23,0-13.004,4.118-13.004,12.652c0,8.372,3.064,16.348,13.18,16.348c8.367,0,19.188,0,27.726,0c8.527,0,14.095,4.659,14.095,11.292c0,7.924,5.049,13.708,14.07,13.708c31.402,0,106.853,0,137.575,0c9.209,0,13.355,8.605,13.355,13.932c0,26.855,0,85.454,0,111.787c0,7.003,5.738,13.281,15.16,13.281c27.004,0,83.071,0,109.484,0c8.844,0,14.355,6.448,14.355,14.589c0,10.933-5.415,16.411-13.775,16.411c-8.578,0-14.225,5.688-14.225,10.997c-1,21.253,16.501,34.67,39.834,32.67s59.72-19.334,63.333-77.334s-38.419-58.724-2.876-143.362c35.543-84.637-31.851-132.554-23.66-194.708c9.375-71.142,49.203-73.929,66.536-149.263c0-54.333-59.469-55.664-95.734-48.665s-48.265-18.999-91.599-20s-30,31-99.667,31s-44.05-26.665-103.191-31c-59.142-4.335-38.976,40.167-121.642,41.832c-23.568,0-54.487-17.882-63.333-10.333C12.211,47.827,7.582,70.632,6.53,77.041C6.376,77.978,6.426,79.895,6.426,79.957z",styleClass:"myPathAnimator",gapPercentage:"4",nWalkers:"25",reverse:!1,duration:"20"}},REORDERING:{id:"",type:"case",templateId:"",script:"case",data:{styleClass:""},events:[],components:[{id:"",type:"label",parentId:"",data:{text:"Sort following numbers!!!",styleClass:""}},{id:"",type:"label",parentId:"",data:{text:"Great Job!!!",styleClass:""}},{id:"",type:"label",parentId:"",data:{text:"Try Again!!!",styleClass:""}},{id:"",type:"sorting",state:"attached",parentId:"",data:{styleClass:"",placeholder:"placeholder",direction:"HORIZONTAL",answer:"1|2|3|4|5",shuffle:"true"},events:[],components:[{id:"",type:"sortable",state:"attached",data:{styleClass:"",value:"1"},components:[{id:"",type:"label",data:{text:"ONE",styleClass:""}}]},{id:"",type:"sortable",state:"attached",data:{styleClass:"",value:"2"},components:[{id:"",type:"label",data:{text:"TWO",styleClass:""}}]},{id:"",type:"sortable",state:"attached",data:{styleClass:"",value:"3"},components:[{id:"",type:"label",data:{text:"THREE",styleClass:""}}]},{id:"",type:"sortable",state:"attached",data:{styleClass:"",value:"4"},components:[{id:"",type:"label",data:{text:"FOUR",styleClass:""}}]},{id:"",type:"sortable",state:"attached",data:{styleClass:"",value:"5"},components:[{id:"",type:"label",data:{text:"FIVE",styleClass:""}}]}]}]},CIRCULARSLIDER:{id:"",type:"circularslider",state:"attached",data:{styleClass:"",tilt:"-4",minOpacity:"1.0",maxOpacity:"1.0",minScale:"0.5",maxScale:"1.0",duration:"600",autoplay:"false",autoplayDuration:"1000",autoplayPauseOnHover:"false",responsive:"true"}},CIRCULARSLIDERSLIDE:{id:"",type:"circularsliderslide",state:"attached",data:{styleClass:""}},MSLIDERTRACK:{id:"",type:"mslidertrack",state:"attached",data:{styleClass:""}},MSLIDERTHUMB:{id:"",type:"msliderthumb",state:"attached",data:{styleClass:""}},WORDSEARCH:{id:"",type:"wordsearch",data:{styleClass:"",puzzleinput:"qwert|qwert|qwert|qwert|qwert",puzzlerow:"5",puzzlecolumn:"5",puzzlefontsize:"12px",puzzlewordlist:"wer|ert|ttttt",puzzleboxheight:"40px",puzzleboxwidth:"40px"},components:[],html:{align:"left"}},MSLIDER:{id:"",type:"mslider",state:"attached",data:{styleClass:"",snap:!0,showticks:!1,steps:"4",allignment:"horizontal"},components:[{id:"",type:"mslidertrack",data:{styleClass:""}},{id:"",type:"msliderthumb",data:{styleClass:""}}]},COLORPALETTE:{id:"",type:"colorpalette",state:"attached",data:{styleClass:"colorpaletteStyle",toggleMode:!1}}},t});