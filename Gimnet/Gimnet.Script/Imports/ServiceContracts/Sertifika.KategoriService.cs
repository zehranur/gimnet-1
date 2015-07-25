namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    public partial class KategoriService
    {
        [InlineConstant] public const string BaseUrl = "Sertifika/Kategori";
    
        public static jQueryXmlHttpRequest Create(SaveRequest<KategoriRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Create, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(SaveRequest<KategoriRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Update, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Delete, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<KategoriRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Retrieve, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<KategoriRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.List, request, onSuccess, options);
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "Sertifika/Kategori/Create";
            [InlineConstant] public const string Update = "Sertifika/Kategori/Update";
            [InlineConstant] public const string Delete = "Sertifika/Kategori/Delete";
            [InlineConstant] public const string Retrieve = "Sertifika/Kategori/Retrieve";
            [InlineConstant] public const string List = "Sertifika/Kategori/List";
        }
    }
    
}

