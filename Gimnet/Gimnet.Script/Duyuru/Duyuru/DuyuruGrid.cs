
namespace Gimnet.Duyuru
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Duyuru.Duyuru"), IdProperty("Id"), NameProperty("Baslik")]
    [DialogType(typeof(DuyuruDialog)), LocalTextPrefix("Duyuru.Duyuru"), Service("Duyuru/Duyuru")]
    public class DuyuruGrid : EntityGrid<DuyuruRow>
    {
        public DuyuruGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    //[Imported, Serializable, PreserveMemberCase] 
    public partial class DuyuruRow
    {
    }
}