angular.module("ui",[])
angular.module("ui").run(function($templateCache){
  $templateCache.put("view/accordion.html",'<div class="ui-accordion-title">{{title}}</div><div class="ui-accordion-content" ng-show="isOpened" ng-transclude></div>')
  console.log(new Date)
})

//$templateCache.put("view/accordion.html","")
angular.module("ui").directive("uiAccordions", function () {
    return{
        controller: function($scope,$element,$attrs){
            this.registerAccordions=function(accordion){
                accordion.push(accordion)
        }
        this.closeAll=function(){
            this.registerAccordions.forEach(function(accordion){
                accordion.isOpened=false
            })
        }
     }
    }
});
angular.module("ui").directive("uiAccordion", function () {
  return {
    templateUrl: "/view/accordion.html",
    transclude: true,
    scope: {
      title: "@",
    },
    require:"ngModel",
    link: function (scope, element, attrs, ctrl) {
        ctrl.registerAccordions(scope)
        scope.open = function () {
            ctrl.closeAll()
            scope.isOpened = !scope.isOpened;
      };
    },
  };
});