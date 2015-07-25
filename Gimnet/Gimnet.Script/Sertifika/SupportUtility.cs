using jQueryApi;
using Serenity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Gimnet.Sertifika
{
    public class SupportUtility : ScriptContext
    {
        public static void AddLinkToTitle(jQueryObject dialog)
        {
            var link = J("<a class=\"dialog-support-link\" tabindex=\"-1\" onclick=\"supportClick()\"><i class=\"fa icon-support\"></i>Destek</a>");
            link.AppendTo(dialog.Closest(".ui-dialog").Children(".ui-dialog-titlebar"));
        }
    }
}
