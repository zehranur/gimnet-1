﻿
namespace Gimnet.Sertifika
{
    using Gimnet.Sertifika.Barkod;
    using Gimnet.Sertifika.SertifikaResim;
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("Id"), NameProperty("Marka")]
    [FormKey("Sertifika.HelalSertifika"), LocalTextPrefix("Sertifika.HelalSertifika"), Service("Sertifika/HelalSertifika")]
    public class HelalSertifikaDialog : EntityDialog<HelalSertifikaRow>
    {
        HelalSertifikaForm form;

        public HelalSertifikaDialog()
        {
            form = new HelalSertifikaForm(this.idPrefix);
        }

        protected override void LoadEntity(HelalSertifikaRow entity)
        {
            base.LoadEntity(entity);

        }

        protected override void InitToolbar()
        {
            base.InitToolbar();
            var quicAccessDiv = toolbar.FindButton("quick-access-menu-button");

        }

        protected override List<ToolButton> GetToolbarButtons()
        {
            var buttons = base.GetToolbarButtons();
            buttons.Add(new ToolButton
            {
                Title = "Sertifika Belge Resimleri",
                CssClass = "multiple-add-button",
                OnClick = delegate
                {
                    new SertifikaResimGridDialog().LoadByIdAndOpenDialog(Entity.Id.Value);
                }

            });
            buttons.Add(new ToolButton
            {
                Title = "Ürün Barkodları",
                CssClass = "multiple-add-button",
                OnClick = delegate
                {
                    new BarkodGridDialog().LoadByIdAndOpenDialog(Entity.Id.Value);
                }

            });
            return buttons;
        }
    }
}