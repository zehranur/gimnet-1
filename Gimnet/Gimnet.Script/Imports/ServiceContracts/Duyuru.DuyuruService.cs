namespace Gimnet.Duyuru
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    public partial class DuyuruService
    {
        [InlineConstant] public const string BaseUrl = "Duyuru/Duyuru";
    
        public static jQueryXmlHttpRequest Create(SaveRequest<DuyuruRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Create, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(SaveRequest<DuyuruRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Update, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Delete, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<DuyuruRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Retrieve, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<DuyuruRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.List, request, onSuccess, options);
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "Duyuru/Duyuru/Create";
            [InlineConstant] public const string Update = "Duyuru/Duyuru/Update";
            [InlineConstant] public const string Delete = "Duyuru/Duyuru/Delete";
            [InlineConstant] public const string Retrieve = "Duyuru/Duyuru/Retrieve";
            [InlineConstant] public const string List = "Duyuru/Duyuru/List";
        }
    }
    
}

