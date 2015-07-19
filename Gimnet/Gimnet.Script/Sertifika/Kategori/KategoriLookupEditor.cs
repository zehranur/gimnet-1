

namespace Gimnet.Sertifika.Kategori
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Linq;
    using System.Runtime.CompilerServices;

    [Editor, DisplayName("Kategori"), Reflectable]
    public class KategoriLookupEditor : LookupEditorBase<object, KategoriRow>
    {
        public KategoriLookupEditor(jQueryObject hidden)
            : base(hidden, null)
        {
        }

        protected override string GetLookupKey()
        {
            return "Sertifika.Kategoriler";
        }

        protected override IEnumerable<KategoriRow> GetItems(Lookup<KategoriRow> lookup)
        {
            return base.GetItems(lookup).Where(x => x.KategoriAdi != null);
        }
    }
}
