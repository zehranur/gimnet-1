namespace Gimnet.Administration
{
    using Gimnet.Administration.Entities;
    using Serenity;
    using Serenity.Abstractions;
    using Serenity.Data;
    using System;
    using System.Collections.Generic;

    public class PermissionService : IPermissionService
    {
        public bool HasPermission(string permission)
        {
            if (Authorization.Username == "admin")
                return true;

            var user = (UserDefinition)Authorization.UserDefinition;
            if (user == null)
                return false;

            if (GetUserPermissions(user.UserId).Contains(permission))
                return true;

            foreach (var roleId in GetUserRoles(user.UserId))
            {
                if (GetRolePermissions(roleId).Contains(permission))
                    return true;
            }

            return false;
        }

        private HashSet<string> GetUserPermissions(int userId)
        {
            var fld = UserPermissionRow.Fields;

            return TwoLevelCache.GetLocalStoreOnly("UserPermissions:" + userId, TimeSpan.Zero, fld.GenerationKey, () =>
            {
                using (var connection = SqlConnections.NewByKey("Default"))
                {
                    var result = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

                    connection.List<UserPermissionRow>(q => q
                            .Select(fld.PermissionKey)
                            .Where(new Criteria(fld.UserId) == userId))
                        .ForEach(x => result.Add(x.PermissionKey));

                    return result;
                }
            });
        }

        private HashSet<string> GetRolePermissions(int userId)
        {
            var fld = RolePermissionRow.Fields;

            return TwoLevelCache.GetLocalStoreOnly("RolePermissions:" + userId, TimeSpan.Zero, fld.GenerationKey, () =>
            {
                using (var connection = SqlConnections.NewByKey("Default"))
                {
                    var result = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

                    connection.List<RolePermissionRow>(q => q
                            .Select(fld.PermissionKey)
                            .Where(new Criteria(fld.RoleId) == userId))
                        .ForEach(x => result.Add(x.PermissionKey));

                    return result;
                }
            });
        }

        private HashSet<int> GetUserRoles(int userId)
        {
            var fld = UserRoleRow.Fields;

            return TwoLevelCache.GetLocalStoreOnly("UserRoles:" + userId, TimeSpan.Zero, fld.GenerationKey, () =>
            {
                using (var connection = SqlConnections.NewByKey("Default"))
                {
                    var result = new HashSet<int>();

                    connection.List<UserRoleRow>(q => q
                            .Select(fld.RoleId)
                            .Where(new Criteria(fld.UserId) == userId))
                        .ForEach(x => result.Add(x.RoleId.Value));

                    return result;
                }
            });
        }
    }
}