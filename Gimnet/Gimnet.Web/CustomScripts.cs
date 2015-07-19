[assembly: Serenity.Extensibility.ScriptRegistrar(typeof(Gimnet.Scripts))]


namespace Gimnet
{
    using Gimnet.Sertifika.Entities;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;

    internal static class DynamicScriptExtensions
    {
        public static TScript Register<TScript>(this TScript script)
            where TScript : INamedDynamicScript
        {
            DynamicScriptManager.Register(script);
            return script;
        }
    }

    public static class Scripts
    {
        public static IDynamicScript Kategoriler =
            new DbLookupScript<KategoriRow>(
                name: "Sertifika.Kategoriler",
                getItems: cnn =>
                {
                    var row = new KategoriRow();
                    var fld = KategoriRow.Fields;
                    var items = new SqlQuery().From(row)
                        .SelectTableFields()
                        .OrderBy(fld.KategoriAdi)
                        .List(cnn, row);

                    return items;
                });

        public static IDynamicScript Firmalar =
           new DbLookupScript<FirmaRow>(
               name: "Sertifika.Firma",
               getItems: cnn =>
               {
                   var row = new FirmaRow();
                   var fld = FirmaRow.Fields;
                   var items = new SqlQuery().From(row)
                       .SelectTableFields()
                       .OrderBy(fld.FirmaAdi)
                       .List(cnn, row);

                   return items;
               });
    }
}