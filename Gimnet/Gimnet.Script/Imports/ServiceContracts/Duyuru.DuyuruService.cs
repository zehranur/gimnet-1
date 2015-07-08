namespace Gimnet.Duyuru
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public partial class DuyuruService
    {
        public static jQueryXmlHttpRequest Create(SaveRequest<DuyuruRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Duyuru/Duyuru/Create", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(SaveRequest<DuyuruRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Duyuru/Duyuru/Update", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Duyuru/Duyuru/Delete", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<DuyuruRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Duyuru/Duyuru/Retrieve", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<DuyuruRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Duyuru/Duyuru/List", request, onSuccess, options);
        }
    }
    
}

