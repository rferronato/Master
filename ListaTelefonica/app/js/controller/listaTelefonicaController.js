(function() {

    'use strict';

    angular
        .module("ListaTelefonica")
        .controller("ContatoController", ContatoController);

    ContatoController.$inject = ['$scope', '$uibModal'];

    function ContatoController($scope, $uibModal) {

        var vm = this;

        // *  Properties *
        vm.mensagem = "Lista Telefonica";
        vm.criterioBusca = "";

        vm.contatos = [{
            codigo: 1,
            nome: "Ben-hur",
            idade: 21,
            cpf: "02626685054",
            operadora: {
                nome: "Oi",
                codigo: 1
            },
            sexo: {
                nome: "Masculino",
                codigo: 1
            }
        }, {
            codigo: 2,
            nome: "Fulano",
            idade: 22,
            cpf: "99999999999",
            operadora: {
                nome: "Oi",
                codigo: 1
            },
            sexo: {
                nome: "Masculino",
                codigo: 1
            }
        }, {
            codigo: 3,
            nome: "Ciclano",
            idade: 23,
            cpf: "88888888888",
            operadora: {
                nome: "Oi",
                codigo: 1
            },
            sexo: {
                nome: "Masculino",
                codigo: 1
            }
        }];

        vm.sexos = [{
            nome: "Masculino",
            codigo: 1
        }, {
            nome: "Feminino",
            codigo: 2
        }];

        vm.operadoras = [{
            nome: "Oi",
            codigo: 1,
            categoria: "Celular"
        }, {
            nome: "Tim",
            codigo: 2,
            categoria: "Celular"
        }, {
            nome: "Vivo",
            codigo: 3,
            categoria: "Celular"
        }, {
            nome: "Embratel",
            codigo: 4,
            categoria: "Fixo"
        }];


        // *  Methods *
        vm.excluir = excluir;
        vm.open = open;


        /**
         * [excluir: excluí um contato da grid.]
         * @param  {[object json]} item [contato a ser excluído]
         * @return {[list object json]}      [lista de contatos]
         */
        function excluir(item) {
            vm.contatos = vm.contatos.filter(function(contato) {
                if (item.codigo != contato.codigo) {
                    return contato;
                }
            });
        }

        /**
         * [open: Abre a modal para inserir/editar]
         * @param  {[object json]} contato [description]
         * @return {[type]}         [description]
         */
        function open(contato) {
            if (contato !== undefined) {
                var modalEditarInstance = $uibModal.open({
                    templateUrl: 'modal.html',
                    controller: 'ModalController as vm',
                    resolve: {
                        operadoras: function() {
                            return vm.operadoras;
                        },
                        sexos: function() {
                            return vm.sexos;
                        },
                        contato: function() {
                            return angular.copy(contato);
                        }
                    }
                });

                modalEditarInstance.result.then(function(item) {
                    var index;
                    vm.contatos.filter(function(item) {
                        if (contato.codigo == item.codigo)
                            index = vm.contatos.indexOf(contato);
                    });

                    vm.contatos[index] = item;

                }, function() {
                    console.log('Close Modal');
                });

            } else {
                var modalInserirInstance = $uibModal.open({
                    templateUrl: 'modal.html',
                    controller: 'ModalController as vm',
                    resolve: {
                        operadoras: function() {
                            return vm.operadoras;
                        },
                        sexos: function() {
                            return vm.sexos;
                        },
                        contato: function() {
                            return null;
                        }
                    }
                });

                modalInserirInstance.result.then(function(contato) {
                    vm.contatos.push(angular.copy(contato));
                    delete vm.contato;
                    //vm.contatoForm.setPristine();
                }, function() {
                    console.log('Close Modal');
                });
            }
        }
    }
}());
