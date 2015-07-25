namespace Gimnet.HelalDunyaMarket
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    public partial class HelalMarketService
    {
        [InlineConstant] public const string BaseUrl = "HelalDunyaMarket/HelalMarket";
    
        public static jQueryXmlHttpRequest Create(SaveRequest<HelalMarketRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Create, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(SaveRequest<HelalMarketRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Update, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Delete, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<HelalMarketRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Retrieve, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<HelalMarketRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.List, request, onSuccess, options);
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "HelalDunyaMarket/HelalMarket/Create";
            [InlineConstant] public const string Update = "HelalDunyaMarket/HelalMarket/Update";
            [InlineConstant] public const string Delete = "HelalDunyaMarket/HelalMarket/Delete";
            [InlineConstant] public const string Retrieve = "HelalDunyaMarket/HelalMarket/Retrieve";
            [InlineConstant] public const string List = "HelalDunyaMarket/HelalMarket/List";
        }
    }
    
}

