angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope,$ionicModal,$ionicScrollDelegate,$cordovaActionSheet ) {

    var $signature = null;

    $scope.modal = {};

    $ionicModal.fromTemplateUrl('templates/info.html', {
        scope: $scope,
        animation: 'slide-in-up',
    }).then(function(info_modal) {
        $scope.modal.info = info_modal;
    });

    $ionicModal.fromTemplateUrl('templates/payment.html', {
        scope: $scope,
        animation: 'slide-in-up',
    }).then(function(payment_modal) {
        $scope.modal.payment = payment_modal;
    });

    $ionicModal.fromTemplateUrl('templates/payment-edit.html', {
        scope: $scope,
        animation: 'slide-in-up',
    }).then(function(payment_edit_modal) {
        $scope.modal.payment_edit = payment_edit_modal;
    });

    $ionicModal.fromTemplateUrl('templates/exam-condition.html', {
        scope: $scope,
        animation: 'slide-in-up',
    }).then(function(exam_condition_modal) {
        $scope.modal.exam_condition = exam_condition_modal;
    });

    $ionicModal.fromTemplateUrl('templates/exam-theory.html', {
        scope: $scope,
        animation: 'slide-in-up',
    }).then(function(exam_exam_theory_modal) {
        $scope.modal.exam_theory = exam_exam_theory_modal;
    });

    $ionicModal.fromTemplateUrl('templates/exam-theory-edit.html', {
        scope: $scope,
        animation: 'slide-in-up',
    }).then(function(exam_exam_theory_edit_modal) {
        $scope.modal.exam_theory_edit = exam_exam_theory_edit_modal;
    });

    $ionicModal.fromTemplateUrl('templates/adk.html', {
        scope: $scope,
        animation: 'slide-in-up',
    }).then(function(adk_modal) {
        $scope.modal.adk = adk_modal;
    });

    $ionicModal.fromTemplateUrl('templates/ride.html', {
        scope: $scope,
        animation: 'slide-in-up',
    }).then(function(ride_modal) {
        $scope.modal.ride = ride_modal;
    });

    $ionicModal.fromTemplateUrl('templates/call.html', {
        scope: $scope,
        animation: 'slide-in-up',
    }).then(function(call_modal) {
        $scope.modal.call = call_modal;
    });

    $ionicModal.fromTemplateUrl('templates/new_event.html', {
        scope: $scope,
        animation: 'slide-in-up',
    }).then(function(new_event_modal) {
        $scope.modal.new_event = new_event_modal;
    });

    $ionicModal.fromTemplateUrl('templates/other_activity.html', {
        scope: $scope,
        animation: 'slide-in-up',
    }).then(function(other_activity_modal) {
        $scope.modal.other_activity = other_activity_modal;
    });

    $ionicModal.fromTemplateUrl('templates/register-theory.html', {
        scope: $scope,
        animation: 'slide-in-up',
    }).then(function(register_theory_modal) {
        $scope.modal.register_theory = register_theory_modal;
    });

    $ionicModal.fromTemplateUrl('templates/sign.html', {
        id: 100,
        scope: $scope,
        animation: 'slide-in-up',
    }).then(function(sign_modal) {
        $scope.modal.sign = sign_modal;
    });

    $ionicModal.fromTemplateUrl('templates/other-activity-edit.html', {
        id: 101,
        scope: $scope,
        animation: 'slide-in-up',
    }).then(function(other_activity_edit_modal) {
        $scope.modal.other_activity_edit = other_activity_edit_modal;
    });

    var width = $('.toolbar-day').width();
    //var height = parseInt(width * 0.44);

    $scope.screen ={
        'width': width,
    };

    $scope.test = {
        items : [
            { 'app_data':{status: 0, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false} }, 'header': true, 'checked': true, status: 0, 'text': 'Sitz-und Spiegeleinstellung, Sicherheitsgurt', width: width/4, height: parseInt(width/4 * 0.44) },
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': false,status: 1,  'text': 'Sitz-und Spiegeleinstellung, Sicherheitsgurt', width: width/4, height: parseInt(width/4 * 0.44) },
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 0, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 0, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 2, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': false, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': false, status: 0, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': true, 'checked': true, status: 0, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 0, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 0, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 0, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 0, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': true, 'checked': true, status: 0, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 0, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 0, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
            { 'app_data':{status: 0}, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false}, 'header': false, 'checked': true, status: 1, 'text': 'Mon 13.07.', width: width/4, height: parseInt(width/4 * 0.44)},
        ],
    }

    $scope.adk_force_plus_all = function(){
        var item;
        for( var i in $scope.test.items ){
            item = $scope.test.items[i];
            if( !item.header ){
                item.status = 1;
            }
        }
    }

    $scope.open_info = function(){
        $scope.modal.info.show();
    }
    $scope.close_info = function(){
        $scope.modal.info.hide();
    }
    $scope.open_payment = function(){
        $scope.modal.payment.show();
    }
    $scope.close_payment = function(){
        $scope.modal.payment.hide();
    }
    $scope.open_payment_edit = function(){
        $scope.modal.payment_edit.show();
    }
    $scope.close_payment_edit = function(){
        $scope.modal.payment_edit.hide();
    }
    $scope.open_exam_condition = function(){
        $scope.modal.exam_condition.show();
    }
    $scope.close_exam_condition = function(){
        $scope.modal.exam_condition.hide();
    }
    $scope.open_exam_theory = function(){
        $scope.modal.exam_theory.show();
    }
    $scope.close_exam_theory = function(){
        $scope.modal.exam_theory.hide();
    }
    $scope.open_exam_theory_edit = function(){
        $scope.modal.exam_theory_edit.show();
    }
    $scope.close_exam_theory_edit = function(){
        $scope.modal.exam_theory_edit.hide();
    }
    $scope.open_adk = function(){
        $scope.modal.adk.show();
    }
    $scope.close_adk = function(){
        $scope.modal.adk.hide();
    }
    $scope.open_ride = function(){
        $scope.modal.ride.show();
    }
    $scope.close_ride = function(){
        $scope.modal.ride.hide();
    }
    $scope.open_call = function(){
        $scope.modal.call.show();
    }
    $scope.close_call = function(){
        $scope.modal.call.hide();
    }
    $scope.open_new_event = function( item ){
        $scope.modal.new_event.item = item;
        $scope.modal.new_event.show();
    }
    $scope.close_new_event = function(){
        $scope.modal.new_event.hide();
    }
    $scope.open_other_activity = function(item){
        $scope.modal.other_activity.item = item;
        $scope.modal.other_activity.show();
    }
    $scope.close_other_activity = function(){
        $scope.modal.other_activity.hide();
    }
    $scope.open_register_theory = function( item ){
        $scope.modal.register_theory.item = item;
        $scope.modal.register_theory.show();
    }
    $scope.close_register_theory = function(){
        $scope.modal.register_theory.hide();
    }
    $scope.open_sign = function( item ){
        $scope.modal.sign.item = item;
        $scope.modal.sign.flag_reserve = false;
        $scope.modal.sign.flag_paied = false;

        $scope.modal.sign.show();
    }
    $scope.close_sign = function(){
        $scope.modal.sign.hide();
    }
    $scope.open_other_activity_edit = function(item){
        $scope.modal.other_activity_edit.item = item;
        $scope.modal.other_activity_edit.show();
    }
    $scope.close_other_activity_edit = function(item){
        $scope.modal.other_activity_edit.hide();
    }

    $scope.$on('modal.shown', function( event, modal ) {
        if( modal.id == 100 ){
            if ( !$signature ){
                $signature = $("#signature").jSignature({  width: $("#signature").width(), height: $("#signature").height() });
            }
        }
    });

    $scope.on_clck_toolbar_day_item = function( item ){
        return;
        var item_width = $( '.toolbar-day ion-item:first' ).width()+8;
        var index = $scope.test.items.indexOf(item);
        if( index  < 0 ){
            return;
        }
        $ionicScrollDelegate.$getByHandle('toolbar-day-scroll').scrollTo( item_width*6, 0, true );
    }

    $scope.open_exam = function(){

        var options = {
            title: 'Prüfungen',
            buttonLabels: ['Prüfungs Voraussetzungen', 'Theorieprüfungen'],
            addCancelButtonWithLabel: 'Cancel',
            androidEnableCancelButton : false,
            winphoneEnableCancelButton : true,
        };

        $cordovaActionSheet.show(options)
        .then(function(btnIndex) {
            var index = btnIndex;
            switch( index ){
                case 1:
                    $scope.open_exam_condition();
                    break;
                case 2:
                    $scope.open_exam_theory();
                    break;
            }
        });
    }

    $scope.on_hold_time = function( item ){

        switch( item.app_data.status ){
            case 0:
                var options = {
                    title: 'freier zeitraum 14:00 Dauer: 45min',
                    buttonLabels: ['Neuer Termin', 'Neue sonstige Tätigkeit'],
                    addCancelButtonWithLabel: 'Cancel',
                    androidEnableCancelButton : false,
                    winphoneEnableCancelButton : true,
                };

                $cordovaActionSheet.show(options)
                .then(function(btnIndex) {
                    var index = btnIndex;
                    switch( index ){
                        case 1:
                            $scope.open_new_event(item);
                            break;
                        case 2:
                            $scope.open_other_activity(item);
                            break;
                    }
                });
                break;
            case 1:
                var options = {
                    title: 'Termin 13:15 Üst',
                    buttonLabels: ['Leistung eintragen/unterschreiben', 'Termin bearbeiten', 'Termin löschen', 'Anruf: 02065-111111' ],
                    addCancelButtonWithLabel: 'Cancel',
                    androidEnableCancelButton : false,
                    winphoneEnableCancelButton : true,
                };

                $cordovaActionSheet.show(options)
                .then(function(btnIndex) {
                    var index = btnIndex;
                    switch( index ){
                        case 1:
                            $scope.open_register_theory(item);
                            break;
                        case 2:
                            $scope.open_new_event(item);
                            break;
                    }
                });
                break;
            case 2:
                var options = {
                    title: 'Termin 13:15 Üst',
                    buttonLabels: ['Fahrstunde bearbeiten', 'Fahrstunde unterschreiben', 'Fahrstunde löschen', 'Anruf: 02065-111111' ],
                    addCancelButtonWithLabel: 'Cancel',
                    androidEnableCancelButton : false,
                    winphoneEnableCancelButton : true,
                };

                $cordovaActionSheet.show(options)
                .then(function(btnIndex) {
                    var index = btnIndex;
                    switch( index ){
                        case 1:
                            $scope.open_register_theory(item);
                            break;
                        case 2:
                            $scope.open_sign(item);
                            break;
                    }
                });

                break;
            case 3:
                var options = {
                    title: 'Termin 13:15 Üst',
                    buttonLabels: ['Fahrstunde bearbeiten', 'Fahrstunde unterschreiben', 'Fahrstunde löschen', 'Anruf: 02065-111111' ],
                    addCancelButtonWithLabel: 'Cancel',
                    androidEnableCancelButton : false,
                    winphoneEnableCancelButton : true,
                };

                $cordovaActionSheet.show(options)
                .then(function(btnIndex) {
                    var index = btnIndex;
                    switch( index ){
                        case 1:
                            $scope.open_register_theory(item);
                            break;
                        case 2:
                            $scope.open_sign(item);
                            break;
                    }
                });
                break;
            case 4:
                var options = {
                    title: 'Termin 13:15 Üst',
                    buttonLabels: ['Theorie Unterricht bearbeiten', 'Theorie Unterricht loschen'],
                    addCancelButtonWithLabel: 'Cancel',
                    androidEnableCancelButton : false,
                    winphoneEnableCancelButton : true,
                };

                $cordovaActionSheet.show(options)
                .then(function(btnIndex) {
                    var index = btnIndex;
                    switch( index ){
                        case 1:
                            $scope.open_other_activity_edit(item);
                            break;
                        case 2:
                            break;
                    }
                });
                break;
        }
    }

    $scope.create_new_event = function(){
        var item = $scope.modal.new_event.item;

        if( item.app_data.status == 0 ){
            item.app_data.status = 1;
        }

        $scope.modal.new_event.hide();
    }

    $scope.create_register_theory = function(){
        var item = $scope.modal.register_theory.item;
        if( item.app_data.status == 1 ){
            item.app_data.status = 2;
        }

        $scope.modal.register_theory.hide();
    }

    $scope.save_driving = function( flag_fail_hour ){
        var item = $scope.modal.register_theory.item;
        var flag_reserve = $scope.modal.sign.flag_reserve;
        var flag_paied = $scope.modal.sign.flag_paied;

        // 
        item.app_data.status = 3;
        item.driving_flag.reserve = flag_reserve;
        item.driving_flag.paied = flag_paied;
        item.driving_flag.fail_hour = flag_fail_hour;

        if( flag_fail_hour ){
            item.driving_flag.ever_fail_hour = true;
        }

        $scope.close_register_theory();
        $scope.close_sign();
    }

    $scope.create_other_activity = function(){
        var item = $scope.modal.other_activity.item;
        if( item.app_data.status == 0 ){
            item.app_data.status = 4;
        }
        $scope.close_other_activity();
    }

    $scope.on_click_delete_oae_item = function(){
        for( var i=0; i<$scope.test.items.length; i++ ){
            var item = $scope.test.items[i];
            if( item.checked ){
                $scope.test.items.splice(i--,1);
            }
        }
    }

    $scope.on_click_add_oae_item = function(){
        $scope.test.items.push( { 'app_data':{status: 0, driving_flag:{reserve:false,paied:false,fail_hour:false,ever_fail_hour:false} }, 'header': true, 'checked': false, status: 0, 'text': 'Sitz-und Spiegeleinstellung, Sicherheitsgurt', width: width/4, height: parseInt(width/4 * 0.44) } );
    }

});
