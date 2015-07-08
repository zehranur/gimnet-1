namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public partial class KategoriService
    {
        public static jQueryXmlHttpRequest Create(SaveRequest<KategoriRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Sertifika/Kategori/Create", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(SaveRequest<KategoriRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Sertifika/Kategori/Update", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Sertifika/Kategori/Delete", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<KategoriRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Sertifika/Kategori/Retrieve", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<KategoriRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Sertifika/Kategori/List", request, onSuccess, options);
        }
    }
    
}

