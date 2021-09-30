angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope,contatosAPI,operadorasAPI,serialGenerator) {
    $scope.app = "Lista Telefonica";
    $scope.contatos =[]
      
    var carregarContatos = function(){
        contatosAPI.getContatos().then(function (response){ 
            console.log(response.data)
            $scope.contatos =response.data   
        }).catch(function(err) {
            console.error('Oh não!!', err.statusText);
        });
    }

    var carregarOperadoras= function(){
        operadorasAPI.getOperadoras().then(function (response){ 
            console.log(response.data)
            $scope.operadoras =response.data   
        }).catch(function(err) {
            console.error('Oh não!!', err.statusText);
        });
    }
   
    $scope.adicionarContato = function (contato) {
        contato.serial=serialGenerator.generate()
        contato.data =new Date()
        contatosAPI.saveContato(contato).then(function (response){ 
           /* $scope.contatos.push(angular.copy(contato));*/
            console.log(response.data)
            delete $scope.contato;
            $scope.contatoForm.$setPristine()
            carregarContatos()
        })
    }

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    }

    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
    carregarContatos()
    carregarOperadoras()
   
});