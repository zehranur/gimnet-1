using Serenity;
using System.Html;

namespace Gimnet
{
    public static class ScriptInitialization
    {
        static ScriptInitialization()
        {
            Q.Config.RootNamespaces.Add("Gimnet");
        }
    }
}