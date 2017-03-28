var board = JXG.JSXGraph.initBoard('box1', {axis:false, grid:false, showNavigation:false, showCopyright:false,boundingbox: [-2, 4, 6, -2],});

var xaxis = board.create('axis', [[0, 0], [1,0]], 
          {name:'x', 
            withLabel: false, 
            label: {position: 'rt',
                     offset: [-15, 20]
                     }
            });
xaxis.removeAllTicks();
var yaxis = board.create('axis', [[0, 0], [0, 1]], 
          {name:'y', 
            withLabel: false, 
            label: {
              position: 'rt',
              offset: [-20, 0]
                }
            });     
yaxis.removeAllTicks();         
    
var scl = 0.1;

var f = board.create('functiongraph', [function(x) {return scl*x*x}]);
var p1 = board.create('glider', [1, 1, f], {name:'f(y)'});
var p2 = board.create('glider', [4, 3, f], {name:'f(x)'});
var px = board.create('point', [function() {return p1.X();}, 0], {name:'y'})
var px = board.create('point', [function() {return p2.X();}, 0], {name:'x'})
var t1 = board.create('line', [p1,[function() {return p2.X();}, function() {return p1.Y() + scl*(2*p1.X()*(p2.X() - p1.X()));}]], {color: 'black'});

var l1 = board.create('segment', [function(){return p2;}, [function() {return p2.X();}, function() {return   p1.Y() + scl*(2*p1.X()*(p2.X() - p1.X()));}]], {color: 'red', name:'D(x||y)', withLabel:true});




var board2 = JXG.JSXGraph.initBoard('box2', {axis:false, grid:false, showNavigation:false, showCopyright:false,boundingbox: [-.1, .1, 1, -.8],});

var xaxis = board2.create('axis', [[0, 0], [1,0]], 
          {name:'x', 
            withLabel: false, 
            label: {position: 'rt',  // possible values are 'lft', 'rt', 'top', 'bot'
                     offset: [-15, 20]   // (in pixels)
                     }
            });
xaxis.removeAllTicks();
var yaxis = board2.create('axis', [[0, 0], [0, 1]], 
          {name:'y', 
            withLabel: false, 
            label: {
              position: 'rt',  // possible values are 'lft', 'rt', 'top', 'bot'
              offset: [-20, 0]   // (in pixels)
                }
            });     
yaxis.removeAllTicks();         

var f2 = board2.create('functiongraph', [function(x) {return x*Math.log(x);}]);
var p12 = board2.create('glider', [.2, -.32, f2], {name:'f(y)'});
var p22 = board2.create('glider', [.88, -.37, f2], {name:'f(x)'});
var px2 = board2.create('point', [function() {return p12.X();}, 0], {name:'y'})
var px2 = board2.create('point', [function() {return p22.X();}, 0], {name:'x'})                    
var t12 = board2.create('line', [p12,[function() {return p22.X();}, function() {return p12.Y() + (Math.log(p12.X()) + 1)*(p22.X() - p12.X());}]], {color: 'black'});
var l12 = board2.create('segment', [function(){return p22;}, [function() {return p22.X();}, function() {return p12.Y() + (Math.log(p12.X()) + 1)*(p22.X() - p12.X());}]], {color: 'red', name:'D(x||y)', withLabel:true});

