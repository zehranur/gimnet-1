namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public partial class FirmaService
    {
        public static jQueryXmlHttpRequest Create(SaveRequest<FirmaRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Sertifika/Firma/Create", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(SaveRequest<FirmaRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Sertifika/Firma/Update", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Sertifika/Firma/Delete", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<FirmaRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Sertifika/Firma/Retrieve", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<FirmaRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Sertifika/Firma/List", request, onSuccess, options);
        }
    }
    
}

