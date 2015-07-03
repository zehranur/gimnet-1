
namespace Gimnet.Sertifika
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Sertifika.HelalSertifika"), IdProperty("Id"), NameProperty("Marka")]
    [DialogType(typeof(HelalSertifikaDialog)), LocalTextPrefix("Sertifika.HelalSertifika"), Service("Sertifika/HelalSertifika")]
    public class HelalSertifikaGrid : EntityGrid<HelalSertifikaRow>
    {
        public HelalSertifikaGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    [Imported, Serializable, PreserveMemberCase] 
    public partial class HelalSertifikaRow
    {
    }
}