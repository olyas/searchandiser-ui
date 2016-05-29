"use strict";
var assign = require('object-assign');
var NavigationConverter = (function () {
    function NavigationConverter() {
    }
    NavigationConverter.convert = function (navigations) {
        return navigations.reduce(function (refinements, navigation) {
            navigation.refinements.forEach(function (refinement) { return refinements.push(assign(refinement, { navigationName: navigation.name })); });
            return refinements;
        }, []);
    };
    return NavigationConverter;
}());
exports.NavigationConverter = NavigationConverter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQU8sTUFBTSxXQUFXLGVBQWUsQ0FBQyxDQUFDO0FBSXpDO0lBQUE7SUFPQSxDQUFDO0lBTlEsMkJBQU8sR0FBZCxVQUFlLFdBQThCO1FBQzNDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQUMsV0FBc0MsRUFBRSxVQUFzQjtZQUN2RixVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLGNBQWMsRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUF6RSxDQUF5RSxDQUFDLENBQUM7WUFDeEgsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNyQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLDJCQUFtQixzQkFPL0IsQ0FBQSIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbmltcG9ydCB7IFNlbGVjdGVkUmVmaW5lbWVudCB9IGZyb20gJy4vcmVxdWVzdC1tb2RlbHMnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gJy4vcmVzcG9uc2UtbW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25Db252ZXJ0ZXIge1xuICBzdGF0aWMgY29udmVydChuYXZpZ2F0aW9uczogQXJyYXk8TmF2aWdhdGlvbj4pOiBBcnJheTxTZWxlY3RlZFJlZmluZW1lbnQ+IHtcbiAgICByZXR1cm4gbmF2aWdhdGlvbnMucmVkdWNlKChyZWZpbmVtZW50czogQXJyYXk8U2VsZWN0ZWRSZWZpbmVtZW50PiwgbmF2aWdhdGlvbjogTmF2aWdhdGlvbikgPT4ge1xuICAgICAgbmF2aWdhdGlvbi5yZWZpbmVtZW50cy5mb3JFYWNoKHJlZmluZW1lbnQgPT4gcmVmaW5lbWVudHMucHVzaChhc3NpZ24ocmVmaW5lbWVudCwgeyBuYXZpZ2F0aW9uTmFtZTogbmF2aWdhdGlvbi5uYW1lIH0pKSk7XG4gICAgICByZXR1cm4gcmVmaW5lbWVudHM7XG4gICAgfSwgW10pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
