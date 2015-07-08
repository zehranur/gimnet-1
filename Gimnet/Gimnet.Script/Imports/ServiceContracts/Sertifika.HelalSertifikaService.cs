namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public partial class HelalSertifikaService
    {
        public static jQueryXmlHttpRequest Create(SaveRequest<HelalSertifikaRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Sertifika/HelalSertifika/Create", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(SaveRequest<HelalSertifikaRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Sertifika/HelalSertifika/Update", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Sertifika/HelalSertifika/Delete", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<HelalSertifikaRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Sertifika/HelalSertifika/Retrieve", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<HelalSertifikaRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Sertifika/HelalSertifika/List", request, onSuccess, options);
        }
    }
    
}

