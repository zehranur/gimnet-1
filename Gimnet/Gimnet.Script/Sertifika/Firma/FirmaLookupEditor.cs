

namespace Gimnet.Sertifika.Firma
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Linq;
    using System.Runtime.CompilerServices;

    [Editor, DisplayName("Firma Adı"), Reflectable]
    public class FirmaLookupEditor : LookupEditorBase<object, FirmaRow>
    {
        public FirmaLookupEditor(jQueryObject hidden)
            : base(hidden, null)
        {
        }

        protected override string GetLookupKey()
        {
            return "Sertifika.Firmalar";
        }

        protected override IEnumerable<FirmaRow> GetItems(Lookup<FirmaRow> lookup)
        {
            return base.GetItems(lookup).Where(x => x.FirmaAdi != null);
        }
    }
}
