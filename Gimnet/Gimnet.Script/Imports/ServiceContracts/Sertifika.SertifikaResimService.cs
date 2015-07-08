namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public partial class SertifikaResimService
    {
        public static jQueryXmlHttpRequest Create(SaveRequest<SertifikaResimRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Sertifika/SertifikaResim/Create", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(SaveRequest<SertifikaResimRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Sertifika/SertifikaResim/Update", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Sertifika/SertifikaResim/Delete", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<SertifikaResimRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Sertifika/SertifikaResim/Retrieve", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<SertifikaResimRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Sertifika/SertifikaResim/List", request, onSuccess, options);
        }
    }
    
}

