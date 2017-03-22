(function() {

    'use strict';

    angular
        .module("ListaTelefonica")
        .controller('ModalController', ModalController);

    ModalController.$inject = ['$scope', '$uibModalInstance', 'operadoras', 'sexos', 'contato'];

    function ModalController($scope, $uibModalInstance, operadoras, sexos, contato) {

        var vm = this;

        // *  Properties *
        vm.tituloModal = "";
        vm.operadoras = operadoras;
        vm.sexos = sexos;

        if (contato !== null && contato !== undefined) {
            vm.tituloModal = "Editar";
            vm.editar = true;
            vm.contato = contato;
        } else {
            vm.tituloModal = "Adicionar";
            vm.editar = false;
        }

        // *  Methods *
        vm.save = save;
        vm.cancel = cancel;

        /**
         * [save: salva o contato na lista de contatos]
         * @param  {[object json]} contato [ contato a ser salvo]
         * @return {[type]}         [description]
         */
        function save(contato) {
            $uibModalInstance.close(contato);
        }

        /**
         * [cancel fecha a modal]
         * @return {[type]} [description]
         */
        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }
    }

}());
