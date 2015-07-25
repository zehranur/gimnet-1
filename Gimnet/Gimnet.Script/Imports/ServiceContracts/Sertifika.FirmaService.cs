namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    public partial class FirmaService
    {
        [InlineConstant] public const string BaseUrl = "Sertifika/Firma";
    
        public static jQueryXmlHttpRequest Create(SaveRequest<FirmaRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Create, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(SaveRequest<FirmaRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Update, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Delete, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<FirmaRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Retrieve, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<FirmaRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.List, request, onSuccess, options);
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "Sertifika/Firma/Create";
            [InlineConstant] public const string Update = "Sertifika/Firma/Update";
            [InlineConstant] public const string Delete = "Sertifika/Firma/Delete";
            [InlineConstant] public const string Retrieve = "Sertifika/Firma/Retrieve";
            [InlineConstant] public const string List = "Sertifika/Firma/List";
        }
    }
    
}

