'use strict';

describe('Factory: Nutupane', function () {
    var scope, row_data;

    beforeEach(module('Katello'));

    beforeEach(function(){
        row_data = {
            'columns' : [{ 
                id : 1, 
                name : 'Column 1', 
                show : true 
            }, { 
                id: 2,
                name: 'Column 2',
                show: true
            }],
            'rows': [{
                'id'    : 'row_1',
                'cells' : [{
                    id: 1,
                    display: 1,
                    column: 1
                },{
                    id: 2,
                    display: 2,
                    column: 2
                }]
            },{
                'id': 'row_2',      
                'cells' : [{
                    id: 1,
                    display: 1,
                    column: 1
                },{
                    id: 2,
                    display: 2,
                    column: 2
                }]
            }]
        }
    });

    describe('setNewItemVisibility', function(){

        beforeEach(inject(function($rootScope, $compile, Nutupane){
            scope = $rootScope;
            scope.table = Nutupane.table;
            scope.table.data = row_data;
        }));

        it('should set newPaneVisible', inject(function ($rootScope, $compile, Nutupane) {
            Nutupane.table.setNewItemVisibility(true);

            expect(Nutupane.table.newPaneVisible).toBe(true);
        }));
    });

});
