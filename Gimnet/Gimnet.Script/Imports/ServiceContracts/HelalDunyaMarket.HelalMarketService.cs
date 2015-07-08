namespace Gimnet.HelalDunyaMarket
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public partial class HelalMarketService
    {
        public static jQueryXmlHttpRequest Create(SaveRequest<HelalMarketRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("HelalDunyaMarket/HelalMarket/Create", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(SaveRequest<HelalMarketRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("HelalDunyaMarket/HelalMarket/Update", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("HelalDunyaMarket/HelalMarket/Delete", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<HelalMarketRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("HelalDunyaMarket/HelalMarket/Retrieve", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<HelalMarketRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("HelalDunyaMarket/HelalMarket/List", request, onSuccess, options);
        }
    }
    
}

