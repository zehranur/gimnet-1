namespace Gimnet.Northwind
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public partial class EmployeeService
    {
        public static jQueryXmlHttpRequest Create(SaveRequest<EmployeeRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Northwind/Employee/Create", request, onSuccess, options);
        }

        public static jQueryXmlHttpRequest Update(SaveRequest<EmployeeRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Northwind/Employee/Update", request, onSuccess, options);
        }

        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Northwind/Employee/Delete", request, onSuccess, options);
        }

        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<EmployeeRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Northwind/Employee/Retrieve", request, onSuccess, options);
        }

        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<EmployeeRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Northwind/Employee/List", request, onSuccess, options);
        }
    }

}

