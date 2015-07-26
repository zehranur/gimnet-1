(function() {
	'use strict';
	var $asm = {};
	global.Gimnet = global.Gimnet || {};
	global.Gimnet.Administration = global.Gimnet.Administration || {};
	global.Gimnet.Common = global.Gimnet.Common || {};
	global.Gimnet.Duyuru = global.Gimnet.Duyuru || {};
	global.Gimnet.HelalDunyaMarket = global.Gimnet.HelalDunyaMarket || {};
	global.Gimnet.Membership = global.Gimnet.Membership || {};
	global.Gimnet.Sertifika = global.Gimnet.Sertifika || {};
	global.Gimnet.Sertifika.Firma = global.Gimnet.Sertifika.Firma || {};
	global.Gimnet.Sertifika.Kategori = global.Gimnet.Sertifika.Kategori || {};
	global.Gimnet.Sertifika.SertifikaResim = global.Gimnet.Sertifika.SertifikaResim || {};
	global.Serenity = global.Serenity || {};
	ss.initAssembly($asm, 'Gimnet.Script');
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.ScriptInitialization
	var $Gimnet_ScriptInitialization = function() {
	};
	$Gimnet_ScriptInitialization.__typeName = 'Gimnet.ScriptInitialization';
	global.Gimnet.ScriptInitialization = $Gimnet_ScriptInitialization;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.LanguageDialog
	var $Gimnet_Administration_LanguageDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Gimnet_Administration_LanguageDialog.__typeName = 'Gimnet.Administration.LanguageDialog';
	global.Gimnet.Administration.LanguageDialog = $Gimnet_Administration_LanguageDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.LanguageForm
	var $Gimnet_Administration_LanguageForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Gimnet_Administration_LanguageForm.__typeName = 'Gimnet.Administration.LanguageForm';
	global.Gimnet.Administration.LanguageForm = $Gimnet_Administration_LanguageForm;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.LanguageGrid
	var $Gimnet_Administration_LanguageGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Gimnet_Administration_LanguageGrid.__typeName = 'Gimnet.Administration.LanguageGrid';
	global.Gimnet.Administration.LanguageGrid = $Gimnet_Administration_LanguageGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.LanguageService
	var $Gimnet_Administration_LanguageService = function() {
	};
	$Gimnet_Administration_LanguageService.__typeName = 'Gimnet.Administration.LanguageService';
	$Gimnet_Administration_LanguageService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Language/Create', request, onSuccess, options);
	};
	$Gimnet_Administration_LanguageService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Language/Update', request, onSuccess, options);
	};
	$Gimnet_Administration_LanguageService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Language/Delete', request, onSuccess, options);
	};
	$Gimnet_Administration_LanguageService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Language/Retrieve', request, onSuccess, options);
	};
	$Gimnet_Administration_LanguageService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Language/List', request, onSuccess, options);
	};
	global.Gimnet.Administration.LanguageService = $Gimnet_Administration_LanguageService;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.PermissionCheckEditor
	var $Gimnet_Administration_PermissionCheckEditor = function(div) {
		this.$containsText = null;
		ss.makeGenericType(Serenity.CheckTreeEditor$1, [Object]).call(this, div, null);
	};
	$Gimnet_Administration_PermissionCheckEditor.__typeName = 'Gimnet.Administration.PermissionCheckEditor';
	global.Gimnet.Administration.PermissionCheckEditor = $Gimnet_Administration_PermissionCheckEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.PermissionModuleEditor
	var $Gimnet_Administration_PermissionModuleEditor = function(hidden) {
		ss.makeGenericType(Serenity.Select2Editor$2, [Object, String]).call(this, hidden, null);
		var modules = {};
		var permissions = Q.getRemoteData('Administration.PermissionKeys').Entities;
		for (var i = 0; i < permissions.length; i++) {
			var k = permissions[i];
			var idx1 = k.indexOf(String.fromCharCode(58));
			if (idx1 <= 0) {
				continue;
			}
			var idx2 = k.indexOf(String.fromCharCode(58), idx1 + 1);
			if (idx2 <= 0) {
				continue;
			}
			var module = k.substr(0, idx1);
			modules[module] = true;
		}
		var othersModule = false;
		for (var $t1 = 0; $t1 < permissions.length; $t1++) {
			var k1 = permissions[$t1];
			var idx11 = k1.indexOf(String.fromCharCode(58));
			if (idx11 < 0 && !ss.isValue(modules[k1])) {
				othersModule = true;
				break;
			}
		}
		var moduleList = [];
		ss.arrayAddRange(moduleList, Object.keys(modules));
		if (othersModule) {
			moduleList.push('Common');
		}
		for (var $t2 = 0; $t2 < moduleList.length; $t2++) {
			var k2 = moduleList[$t2];
			this.addItem(k2, k2, k2, false);
		}
	};
	$Gimnet_Administration_PermissionModuleEditor.__typeName = 'Gimnet.Administration.PermissionModuleEditor';
	global.Gimnet.Administration.PermissionModuleEditor = $Gimnet_Administration_PermissionModuleEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.RoleCheckEditor
	var $Gimnet_Administration_RoleCheckEditor = function(div) {
		this.$containsText = null;
		ss.makeGenericType(Serenity.CheckTreeEditor$1, [Object]).call(this, div, null);
	};
	$Gimnet_Administration_RoleCheckEditor.__typeName = 'Gimnet.Administration.RoleCheckEditor';
	global.Gimnet.Administration.RoleCheckEditor = $Gimnet_Administration_RoleCheckEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.RoleDialog
	var $Gimnet_Administration_RoleDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Gimnet_Administration_RoleDialog.__typeName = 'Gimnet.Administration.RoleDialog';
	global.Gimnet.Administration.RoleDialog = $Gimnet_Administration_RoleDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.RoleForm
	var $Gimnet_Administration_RoleForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Gimnet_Administration_RoleForm.__typeName = 'Gimnet.Administration.RoleForm';
	global.Gimnet.Administration.RoleForm = $Gimnet_Administration_RoleForm;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.RoleGrid
	var $Gimnet_Administration_RoleGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Gimnet_Administration_RoleGrid.__typeName = 'Gimnet.Administration.RoleGrid';
	global.Gimnet.Administration.RoleGrid = $Gimnet_Administration_RoleGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.RolePermissionDialog
	var $Gimnet_Administration_RolePermissionDialog = function(opt) {
		this.$permissions = null;
		ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).$ctor1.call(this, opt);
		this.$permissions = new $Gimnet_Administration_PermissionCheckEditor(this.byId$1('Permissions'));
		$Gimnet_Administration_RolePermissionService.list({ RoleID: this.options.roleID, Module: null, Submodule: null }, ss.mkdel(this, function(response) {
			this.$permissions.set_value(response.Entities);
		}), null);
	};
	$Gimnet_Administration_RolePermissionDialog.__typeName = 'Gimnet.Administration.RolePermissionDialog';
	global.Gimnet.Administration.RolePermissionDialog = $Gimnet_Administration_RolePermissionDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.RolePermissionService
	var $Gimnet_Administration_RolePermissionService = function() {
	};
	$Gimnet_Administration_RolePermissionService.__typeName = 'Gimnet.Administration.RolePermissionService';
	$Gimnet_Administration_RolePermissionService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/RolePermission/Update', request, onSuccess, options);
	};
	$Gimnet_Administration_RolePermissionService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/RolePermission/List', request, onSuccess, options);
	};
	global.Gimnet.Administration.RolePermissionService = $Gimnet_Administration_RolePermissionService;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.RoleService
	var $Gimnet_Administration_RoleService = function() {
	};
	$Gimnet_Administration_RoleService.__typeName = 'Gimnet.Administration.RoleService';
	$Gimnet_Administration_RoleService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Role/Create', request, onSuccess, options);
	};
	$Gimnet_Administration_RoleService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Role/Update', request, onSuccess, options);
	};
	$Gimnet_Administration_RoleService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Role/Delete', request, onSuccess, options);
	};
	$Gimnet_Administration_RoleService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Role/Retrieve', request, onSuccess, options);
	};
	$Gimnet_Administration_RoleService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Role/List', request, onSuccess, options);
	};
	global.Gimnet.Administration.RoleService = $Gimnet_Administration_RoleService;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.TranslationGrid
	var $Gimnet_Administration_TranslationGrid = function(container) {
		this.$searchText = null;
		this.$sourceLanguage = null;
		this.$targetLanguage = null;
		this.$targetLanguageKey = null;
		this.$hasChanges = false;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
		this.element.on('keyup.' + this.uniqueName + ' change.' + this.uniqueName, 'input.custom-text', ss.mkdel(this, function(e) {
			var value = Q.trimToNull($(e.target).val());
			if (value === '') {
				value = null;
			}
			this.view.getItemById($(e.target).data('key')).CustomText = value;
			this.$hasChanges = true;
		}));
	};
	$Gimnet_Administration_TranslationGrid.__typeName = 'Gimnet.Administration.TranslationGrid';
	global.Gimnet.Administration.TranslationGrid = $Gimnet_Administration_TranslationGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.TranslationService
	var $Gimnet_Administration_TranslationService = function() {
	};
	$Gimnet_Administration_TranslationService.__typeName = 'Gimnet.Administration.TranslationService';
	$Gimnet_Administration_TranslationService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Translation/List', request, onSuccess, options);
	};
	$Gimnet_Administration_TranslationService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Translation/Update', request, onSuccess, options);
	};
	global.Gimnet.Administration.TranslationService = $Gimnet_Administration_TranslationService;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.UserDialog
	var $Gimnet_Administration_UserDialog = function() {
		this.$form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.$form = new $Gimnet_Administration_UserForm(this.get_idPrefix());
		Serenity.VX.addValidationRule(this.$form.get_password(), this.uniqueName, ss.mkdel(this, function(e) {
			if (this.$form.get_password().get_value().length < 7) {
				return 'Password must be at least 7 characters!';
			}
			return null;
		}));
		Serenity.VX.addValidationRule(this.$form.get_passwordConfirm(), this.uniqueName, ss.mkdel(this, function(e1) {
			if (!ss.referenceEquals(this.$form.get_password().get_value(), this.$form.get_passwordConfirm().get_value())) {
				return "The passwords entered doesn't match!";
			}
			return null;
		}));
	};
	$Gimnet_Administration_UserDialog.__typeName = 'Gimnet.Administration.UserDialog';
	global.Gimnet.Administration.UserDialog = $Gimnet_Administration_UserDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.UserForm
	var $Gimnet_Administration_UserForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Gimnet_Administration_UserForm.__typeName = 'Gimnet.Administration.UserForm';
	global.Gimnet.Administration.UserForm = $Gimnet_Administration_UserForm;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.UserGrid
	var $Gimnet_Administration_UserGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Gimnet_Administration_UserGrid.__typeName = 'Gimnet.Administration.UserGrid';
	global.Gimnet.Administration.UserGrid = $Gimnet_Administration_UserGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.UserPermissionDialog
	var $Gimnet_Administration_UserPermissionDialog = function(opt) {
		this.$permissions = null;
		ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).$ctor1.call(this, opt);
		this.$permissions = new $Gimnet_Administration_PermissionCheckEditor(this.byId$1('Permissions'));
		$Gimnet_Administration_UserPermissionService.list({ UserID: this.options.userID, Module: null, Submodule: null }, ss.mkdel(this, function(response) {
			this.$permissions.set_value(response.Entities);
		}), null);
	};
	$Gimnet_Administration_UserPermissionDialog.__typeName = 'Gimnet.Administration.UserPermissionDialog';
	global.Gimnet.Administration.UserPermissionDialog = $Gimnet_Administration_UserPermissionDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.UserPermissionService
	var $Gimnet_Administration_UserPermissionService = function() {
	};
	$Gimnet_Administration_UserPermissionService.__typeName = 'Gimnet.Administration.UserPermissionService';
	$Gimnet_Administration_UserPermissionService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/UserPermission/Update', request, onSuccess, options);
	};
	$Gimnet_Administration_UserPermissionService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/UserPermission/List', request, onSuccess, options);
	};
	$Gimnet_Administration_UserPermissionService.listPermissionKeys = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/UserPermission/ListPermissionKeys', request, onSuccess, options);
	};
	global.Gimnet.Administration.UserPermissionService = $Gimnet_Administration_UserPermissionService;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.UserRoleDialog
	var $Gimnet_Administration_UserRoleDialog = function(opt) {
		this.$permissions = null;
		ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).$ctor1.call(this, opt);
		this.$permissions = new $Gimnet_Administration_RoleCheckEditor(this.byId$1('Roles'));
		$Gimnet_Administration_UserRoleService.list({ UserID: this.options.userID }, ss.mkdel(this, function(response) {
			this.$permissions.set_value(Enumerable.from(response.Entities).select(function(x) {
				return x.toString();
			}).toArray());
		}), null);
	};
	$Gimnet_Administration_UserRoleDialog.__typeName = 'Gimnet.Administration.UserRoleDialog';
	global.Gimnet.Administration.UserRoleDialog = $Gimnet_Administration_UserRoleDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.UserRoleService
	var $Gimnet_Administration_UserRoleService = function() {
	};
	$Gimnet_Administration_UserRoleService.__typeName = 'Gimnet.Administration.UserRoleService';
	$Gimnet_Administration_UserRoleService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/UserRole/Update', request, onSuccess, options);
	};
	$Gimnet_Administration_UserRoleService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/UserRole/List', request, onSuccess, options);
	};
	global.Gimnet.Administration.UserRoleService = $Gimnet_Administration_UserRoleService;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Administration.UserService
	var $Gimnet_Administration_UserService = function() {
	};
	$Gimnet_Administration_UserService.__typeName = 'Gimnet.Administration.UserService';
	$Gimnet_Administration_UserService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/User/Create', request, onSuccess, options);
	};
	$Gimnet_Administration_UserService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/User/Update', request, onSuccess, options);
	};
	$Gimnet_Administration_UserService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/User/Delete', request, onSuccess, options);
	};
	$Gimnet_Administration_UserService.undelete = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/User/Undelete', request, onSuccess, options);
	};
	$Gimnet_Administration_UserService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/User/Retrieve', request, onSuccess, options);
	};
	$Gimnet_Administration_UserService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/User/List', request, onSuccess, options);
	};
	global.Gimnet.Administration.UserService = $Gimnet_Administration_UserService;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Common.CascadedEditorHelper
	var $Gimnet_Common_CascadedEditorHelper$2 = function(TWidget, TParentWidget) {
		var $type = function(widget, getParentValue, updateItems) {
			this.$widget = null;
			this.$updateItems = null;
			this.$parentID = null;
			this.$parentValue = null;
			this.$getParentValue = null;
			this.$widget = widget;
			this.$updateItems = updateItems;
			this.$getParentValue = getParentValue;
		};
		ss.registerGenericClassInstance($type, $Gimnet_Common_CascadedEditorHelper$2, [TWidget, TParentWidget], {
			bindToParent: function() {
				if (Q.isEmptyOrNull(this.get_parentID())) {
					return;
				}
				var parent = Serenity.WX.tryGetWidget(TParentWidget).call(null, Q.findElementWithRelativeId(this.$widget.get_element(), this.get_parentID()));
				if (ss.isValue(parent)) {
					parent.get_element().bind('change.' + this.$widget.get_uniqueName(), ss.mkdel(this, function() {
						this.set_parentValue(this.$getParentValue(parent));
					}));
				}
			},
			unbindFromParent: function() {
				if (Q.isEmptyOrNull(this.get_parentID())) {
					return;
				}
				var parent = Serenity.WX.tryGetWidget(TParentWidget).call(null, Q.findElementWithRelativeId(this.$widget.get_element(), this.get_parentID()));
				if (ss.isValue(parent)) {
					parent.get_element().unbind('.' + this.$widget.get_uniqueName());
				}
			},
			get_parentID: function() {
				return this.$parentID;
			},
			set_parentID: function(value) {
				if (!ss.referenceEquals(this.$parentID, value)) {
					this.unbindFromParent();
					this.$parentID = value;
					this.bindToParent();
					this.$updateItems();
				}
			},
			get_parentValue: function() {
				return this.$parentValue;
			},
			set_parentValue: function(value) {
				if (!ss.referenceEquals(ss.coalesce(this.$parentValue, '').toString(), ss.coalesce(value, '').toString())) {
					this.$parentValue = value;
					this.$updateItems();
				}
			}
		}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$Gimnet_Common_CascadedEditorHelper$2.__typeName = 'Gimnet.Common.CascadedEditorHelper$2';
	ss.initGenericClass($Gimnet_Common_CascadedEditorHelper$2, $asm, 2);
	global.Gimnet.Common.CascadedEditorHelper$2 = $Gimnet_Common_CascadedEditorHelper$2;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Common.LanguageSelection
	var $Gimnet_Common_LanguageSelection = function(hidden, currentLanguage) {
		this.$currentLanguage = null;
		ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]).call(this, hidden);
		this.$currentLanguage = ss.coalesce(currentLanguage, 'en');
		this.set_value('en');
		var self = this;
		Serenity.WX.changeSelect2(this, function(e) {
			$.cookie('LanguagePreference', self.get_value(), { path: Q$Config.applicationPath });
			window.location.reload(true);
		});
	};
	$Gimnet_Common_LanguageSelection.__typeName = 'Gimnet.Common.LanguageSelection';
	global.Gimnet.Common.LanguageSelection = $Gimnet_Common_LanguageSelection;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Common.SidebarSearch
	var $Gimnet_Common_SidebarSearch = function(input, menuUL) {
		this.$menuUL = null;
		Serenity.Widget.call(this, input);
		var self = this;
		var $t1 = Serenity.QuickSearchInputOptions.$ctor();
		$t1.onSearch = function(field, text) {
			self.$updateMatchFlags(text);
		};
		new Serenity.QuickSearchInput(input, $t1);
		this.$menuUL = menuUL;
	};
	$Gimnet_Common_SidebarSearch.__typeName = 'Gimnet.Common.SidebarSearch';
	global.Gimnet.Common.SidebarSearch = $Gimnet_Common_SidebarSearch;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Duyuru.DuyuruDialog
	var $Gimnet_Duyuru_DuyuruDialog = function() {
		this.$form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.$form = new $Gimnet_Duyuru_DuyuruForm(this.idPrefix);
	};
	$Gimnet_Duyuru_DuyuruDialog.__typeName = 'Gimnet.Duyuru.DuyuruDialog';
	global.Gimnet.Duyuru.DuyuruDialog = $Gimnet_Duyuru_DuyuruDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Duyuru.DuyuruForm
	var $Gimnet_Duyuru_DuyuruForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Gimnet_Duyuru_DuyuruForm.__typeName = 'Gimnet.Duyuru.DuyuruForm';
	global.Gimnet.Duyuru.DuyuruForm = $Gimnet_Duyuru_DuyuruForm;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Duyuru.DuyuruGrid
	var $Gimnet_Duyuru_DuyuruGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Gimnet_Duyuru_DuyuruGrid.__typeName = 'Gimnet.Duyuru.DuyuruGrid';
	global.Gimnet.Duyuru.DuyuruGrid = $Gimnet_Duyuru_DuyuruGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Duyuru.DuyuruService
	var $Gimnet_Duyuru_DuyuruService = function() {
	};
	$Gimnet_Duyuru_DuyuruService.__typeName = 'Gimnet.Duyuru.DuyuruService';
	$Gimnet_Duyuru_DuyuruService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Duyuru/Duyuru/Create', request, onSuccess, options);
	};
	$Gimnet_Duyuru_DuyuruService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Duyuru/Duyuru/Update', request, onSuccess, options);
	};
	$Gimnet_Duyuru_DuyuruService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Duyuru/Duyuru/Delete', request, onSuccess, options);
	};
	$Gimnet_Duyuru_DuyuruService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Duyuru/Duyuru/Retrieve', request, onSuccess, options);
	};
	$Gimnet_Duyuru_DuyuruService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Duyuru/Duyuru/List', request, onSuccess, options);
	};
	global.Gimnet.Duyuru.DuyuruService = $Gimnet_Duyuru_DuyuruService;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.HelalDunyaMarket.HelalMarketDialog
	var $Gimnet_HelalDunyaMarket_HelalMarketDialog = function() {
		this.$form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.$form = new $Gimnet_HelalDunyaMarket_HelalMarketForm(this.idPrefix);
	};
	$Gimnet_HelalDunyaMarket_HelalMarketDialog.__typeName = 'Gimnet.HelalDunyaMarket.HelalMarketDialog';
	global.Gimnet.HelalDunyaMarket.HelalMarketDialog = $Gimnet_HelalDunyaMarket_HelalMarketDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.HelalDunyaMarket.HelalMarketForm
	var $Gimnet_HelalDunyaMarket_HelalMarketForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Gimnet_HelalDunyaMarket_HelalMarketForm.__typeName = 'Gimnet.HelalDunyaMarket.HelalMarketForm';
	global.Gimnet.HelalDunyaMarket.HelalMarketForm = $Gimnet_HelalDunyaMarket_HelalMarketForm;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.HelalDunyaMarket.HelalMarketGrid
	var $Gimnet_HelalDunyaMarket_HelalMarketGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Gimnet_HelalDunyaMarket_HelalMarketGrid.__typeName = 'Gimnet.HelalDunyaMarket.HelalMarketGrid';
	global.Gimnet.HelalDunyaMarket.HelalMarketGrid = $Gimnet_HelalDunyaMarket_HelalMarketGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.HelalDunyaMarket.HelalMarketService
	var $Gimnet_HelalDunyaMarket_HelalMarketService = function() {
	};
	$Gimnet_HelalDunyaMarket_HelalMarketService.__typeName = 'Gimnet.HelalDunyaMarket.HelalMarketService';
	$Gimnet_HelalDunyaMarket_HelalMarketService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('HelalDunyaMarket/HelalMarket/Create', request, onSuccess, options);
	};
	$Gimnet_HelalDunyaMarket_HelalMarketService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('HelalDunyaMarket/HelalMarket/Update', request, onSuccess, options);
	};
	$Gimnet_HelalDunyaMarket_HelalMarketService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('HelalDunyaMarket/HelalMarket/Delete', request, onSuccess, options);
	};
	$Gimnet_HelalDunyaMarket_HelalMarketService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('HelalDunyaMarket/HelalMarket/Retrieve', request, onSuccess, options);
	};
	$Gimnet_HelalDunyaMarket_HelalMarketService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('HelalDunyaMarket/HelalMarket/List', request, onSuccess, options);
	};
	global.Gimnet.HelalDunyaMarket.HelalMarketService = $Gimnet_HelalDunyaMarket_HelalMarketService;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Membership.LoginForm
	var $Gimnet_Membership_LoginForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Gimnet_Membership_LoginForm.__typeName = 'Gimnet.Membership.LoginForm';
	global.Gimnet.Membership.LoginForm = $Gimnet_Membership_LoginForm;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Membership.LoginPanel
	var $Gimnet_Membership_LoginPanel = function() {
		ss.makeGenericType(Serenity.PropertyDialog$1, [Object]).call(this);
		this.byId$1('LoginButton').click(ss.thisFix(ss.mkdel(this, function(s, e) {
			e.preventDefault();
			if (!this.validateForm()) {
				return;
			}
			var request = this.getSaveEntity();
			Q.serviceCall({
				url: Q.resolveUrl('~/Account/Login'),
				request: request,
				onSuccess: function(response) {
					var q = Q$Externals.parseQueryString();
					var $t1 = q['returnUrl'];
					if (ss.isNullOrUndefined($t1)) {
						$t1 = q['ReturnUrl'];
					}
					var r = $t1;
					if (!ss.isNullOrEmptyString(r)) {
						window.location.href = r;
					}
					else {
						window.location.href = Q.resolveUrl('~/');
					}
				}
			});
		})));
	};
	$Gimnet_Membership_LoginPanel.__typeName = 'Gimnet.Membership.LoginPanel';
	global.Gimnet.Membership.LoginPanel = $Gimnet_Membership_LoginPanel;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.FirmaDialog
	var $Gimnet_Sertifika_FirmaDialog = function() {
		this.$form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.$form = new $Gimnet_Sertifika_FirmaForm(this.idPrefix);
		//form.BuyukLogo.GetGridField().Hide();
		//form.OrtaLogo.GetGridField().Hide();
		//PropertyGrid.SetReadOnly(form.BuyukLogo, true);
	};
	$Gimnet_Sertifika_FirmaDialog.__typeName = 'Gimnet.Sertifika.FirmaDialog';
	global.Gimnet.Sertifika.FirmaDialog = $Gimnet_Sertifika_FirmaDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.FirmaDurumIds
	var $Gimnet_Sertifika_FirmaDurumIds = function() {
	};
	$Gimnet_Sertifika_FirmaDurumIds.__typeName = 'Gimnet.Sertifika.FirmaDurumIds';
	global.Gimnet.Sertifika.FirmaDurumIds = $Gimnet_Sertifika_FirmaDurumIds;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.FirmaForm
	var $Gimnet_Sertifika_FirmaForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Gimnet_Sertifika_FirmaForm.__typeName = 'Gimnet.Sertifika.FirmaForm';
	global.Gimnet.Sertifika.FirmaForm = $Gimnet_Sertifika_FirmaForm;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.FirmaGrid
	var $Gimnet_Sertifika_FirmaGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Gimnet_Sertifika_FirmaGrid.__typeName = 'Gimnet.Sertifika.FirmaGrid';
	global.Gimnet.Sertifika.FirmaGrid = $Gimnet_Sertifika_FirmaGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.FirmaLogoUploadEditor
	var $Gimnet_Sertifika_FirmaLogoUploadEditor = function(div, opt) {
		Serenity.ImageUploadEditor.call(this, div, opt);
		this.toolbar.get_element().appendTo(this.element);
	};
	$Gimnet_Sertifika_FirmaLogoUploadEditor.__typeName = 'Gimnet.Sertifika.FirmaLogoUploadEditor';
	global.Gimnet.Sertifika.FirmaLogoUploadEditor = $Gimnet_Sertifika_FirmaLogoUploadEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.FirmaService
	var $Gimnet_Sertifika_FirmaService = function() {
	};
	$Gimnet_Sertifika_FirmaService.__typeName = 'Gimnet.Sertifika.FirmaService';
	$Gimnet_Sertifika_FirmaService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Sertifika/Firma/Create', request, onSuccess, options);
	};
	$Gimnet_Sertifika_FirmaService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Sertifika/Firma/Update', request, onSuccess, options);
	};
	$Gimnet_Sertifika_FirmaService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Sertifika/Firma/Delete', request, onSuccess, options);
	};
	$Gimnet_Sertifika_FirmaService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Sertifika/Firma/Retrieve', request, onSuccess, options);
	};
	$Gimnet_Sertifika_FirmaService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Sertifika/Firma/List', request, onSuccess, options);
	};
	global.Gimnet.Sertifika.FirmaService = $Gimnet_Sertifika_FirmaService;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.HelalSertifikaDialog
	var $Gimnet_Sertifika_HelalSertifikaDialog = function() {
		this.$form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.$form = new $Gimnet_Sertifika_HelalSertifikaForm(this.idPrefix);
	};
	$Gimnet_Sertifika_HelalSertifikaDialog.__typeName = 'Gimnet.Sertifika.HelalSertifikaDialog';
	global.Gimnet.Sertifika.HelalSertifikaDialog = $Gimnet_Sertifika_HelalSertifikaDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.HelalSertifikaForm
	var $Gimnet_Sertifika_HelalSertifikaForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Gimnet_Sertifika_HelalSertifikaForm.__typeName = 'Gimnet.Sertifika.HelalSertifikaForm';
	global.Gimnet.Sertifika.HelalSertifikaForm = $Gimnet_Sertifika_HelalSertifikaForm;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.HelalSertifikaGrid
	var $Gimnet_Sertifika_HelalSertifikaGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Gimnet_Sertifika_HelalSertifikaGrid.__typeName = 'Gimnet.Sertifika.HelalSertifikaGrid';
	global.Gimnet.Sertifika.HelalSertifikaGrid = $Gimnet_Sertifika_HelalSertifikaGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.HelalSertifikaService
	var $Gimnet_Sertifika_HelalSertifikaService = function() {
	};
	$Gimnet_Sertifika_HelalSertifikaService.__typeName = 'Gimnet.Sertifika.HelalSertifikaService';
	$Gimnet_Sertifika_HelalSertifikaService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Sertifika/HelalSertifika/Create', request, onSuccess, options);
	};
	$Gimnet_Sertifika_HelalSertifikaService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Sertifika/HelalSertifika/Update', request, onSuccess, options);
	};
	$Gimnet_Sertifika_HelalSertifikaService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Sertifika/HelalSertifika/Delete', request, onSuccess, options);
	};
	$Gimnet_Sertifika_HelalSertifikaService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Sertifika/HelalSertifika/Retrieve', request, onSuccess, options);
	};
	$Gimnet_Sertifika_HelalSertifikaService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Sertifika/HelalSertifika/List', request, onSuccess, options);
	};
	global.Gimnet.Sertifika.HelalSertifikaService = $Gimnet_Sertifika_HelalSertifikaService;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.KategoriDialog
	var $Gimnet_Sertifika_KategoriDialog = function() {
		this.$form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.$form = new $Gimnet_Sertifika_KategoriForm(this.idPrefix);
	};
	$Gimnet_Sertifika_KategoriDialog.__typeName = 'Gimnet.Sertifika.KategoriDialog';
	global.Gimnet.Sertifika.KategoriDialog = $Gimnet_Sertifika_KategoriDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.KategoriForm
	var $Gimnet_Sertifika_KategoriForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Gimnet_Sertifika_KategoriForm.__typeName = 'Gimnet.Sertifika.KategoriForm';
	global.Gimnet.Sertifika.KategoriForm = $Gimnet_Sertifika_KategoriForm;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.KategoriGrid
	var $Gimnet_Sertifika_KategoriGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Gimnet_Sertifika_KategoriGrid.__typeName = 'Gimnet.Sertifika.KategoriGrid';
	global.Gimnet.Sertifika.KategoriGrid = $Gimnet_Sertifika_KategoriGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.KategoriService
	var $Gimnet_Sertifika_KategoriService = function() {
	};
	$Gimnet_Sertifika_KategoriService.__typeName = 'Gimnet.Sertifika.KategoriService';
	$Gimnet_Sertifika_KategoriService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Sertifika/Kategori/Create', request, onSuccess, options);
	};
	$Gimnet_Sertifika_KategoriService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Sertifika/Kategori/Update', request, onSuccess, options);
	};
	$Gimnet_Sertifika_KategoriService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Sertifika/Kategori/Delete', request, onSuccess, options);
	};
	$Gimnet_Sertifika_KategoriService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Sertifika/Kategori/Retrieve', request, onSuccess, options);
	};
	$Gimnet_Sertifika_KategoriService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Sertifika/Kategori/List', request, onSuccess, options);
	};
	global.Gimnet.Sertifika.KategoriService = $Gimnet_Sertifika_KategoriService;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.SertifikaDurumIds
	var $Gimnet_Sertifika_SertifikaDurumIds = function() {
	};
	$Gimnet_Sertifika_SertifikaDurumIds.__typeName = 'Gimnet.Sertifika.SertifikaDurumIds';
	global.Gimnet.Sertifika.SertifikaDurumIds = $Gimnet_Sertifika_SertifikaDurumIds;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.SertifikaResimDialog
	var $Gimnet_Sertifika_SertifikaResimDialog = function() {
		this.$form = null;
		this.$8$SertifikaIdField = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.$form = new $Gimnet_Sertifika_SertifikaResimForm(this.idPrefix);
		this.$form.get_sertifikaId().set_value$1(this.get_sertifikaId());
	};
	$Gimnet_Sertifika_SertifikaResimDialog.__typeName = 'Gimnet.Sertifika.SertifikaResimDialog';
	global.Gimnet.Sertifika.SertifikaResimDialog = $Gimnet_Sertifika_SertifikaResimDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.SertifikaResimForm
	var $Gimnet_Sertifika_SertifikaResimForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Gimnet_Sertifika_SertifikaResimForm.__typeName = 'Gimnet.Sertifika.SertifikaResimForm';
	global.Gimnet.Sertifika.SertifikaResimForm = $Gimnet_Sertifika_SertifikaResimForm;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.SertifikaResimGrid
	var $Gimnet_Sertifika_SertifikaResimGrid = function(container) {
		this.$sertifikaRow = null;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Gimnet_Sertifika_SertifikaResimGrid.__typeName = 'Gimnet.Sertifika.SertifikaResimGrid';
	global.Gimnet.Sertifika.SertifikaResimGrid = $Gimnet_Sertifika_SertifikaResimGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.SertifikaResimleriUploadEditor
	var $Gimnet_Sertifika_SertifikaResimleriUploadEditor = function(div, opt) {
		Serenity.MultipleImageUploadEditor.call(this, div, opt);
		this.toolbar.get_element().appendTo(this.element);
	};
	$Gimnet_Sertifika_SertifikaResimleriUploadEditor.__typeName = 'Gimnet.Sertifika.SertifikaResimleriUploadEditor';
	global.Gimnet.Sertifika.SertifikaResimleriUploadEditor = $Gimnet_Sertifika_SertifikaResimleriUploadEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.SertifikaResimService
	var $Gimnet_Sertifika_SertifikaResimService = function() {
	};
	$Gimnet_Sertifika_SertifikaResimService.__typeName = 'Gimnet.Sertifika.SertifikaResimService';
	$Gimnet_Sertifika_SertifikaResimService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Sertifika/SertifikaResim/Create', request, onSuccess, options);
	};
	$Gimnet_Sertifika_SertifikaResimService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Sertifika/SertifikaResim/Update', request, onSuccess, options);
	};
	$Gimnet_Sertifika_SertifikaResimService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Sertifika/SertifikaResim/Delete', request, onSuccess, options);
	};
	$Gimnet_Sertifika_SertifikaResimService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Sertifika/SertifikaResim/Retrieve', request, onSuccess, options);
	};
	$Gimnet_Sertifika_SertifikaResimService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Sertifika/SertifikaResim/List', request, onSuccess, options);
	};
	global.Gimnet.Sertifika.SertifikaResimService = $Gimnet_Sertifika_SertifikaResimService;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.SupportUtility
	var $Gimnet_Sertifika_SupportUtility = function() {
		Serenity.ScriptContext.call(this);
	};
	$Gimnet_Sertifika_SupportUtility.__typeName = 'Gimnet.Sertifika.SupportUtility';
	$Gimnet_Sertifika_SupportUtility.addLinkToTitle = function(dialog) {
		var link = $('<a class="dialog-support-link" tabindex="-1" onclick="supportClick()"><i class="fa icon-support"></i>Destek</a>');
		link.appendTo(dialog.closest('.ui-dialog').children('.ui-dialog-titlebar'));
	};
	global.Gimnet.Sertifika.SupportUtility = $Gimnet_Sertifika_SupportUtility;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.Firma.FirmaLookupEditor
	var $Gimnet_Sertifika_Firma_FirmaLookupEditor = function(hidden) {
		ss.makeGenericType(Serenity.LookupEditorBase$2, [Object, Object]).call(this, hidden, null);
	};
	$Gimnet_Sertifika_Firma_FirmaLookupEditor.__typeName = 'Gimnet.Sertifika.Firma.FirmaLookupEditor';
	global.Gimnet.Sertifika.Firma.FirmaLookupEditor = $Gimnet_Sertifika_Firma_FirmaLookupEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.Kategori.KategoriLookupEditor
	var $Gimnet_Sertifika_Kategori_KategoriLookupEditor = function(hidden) {
		ss.makeGenericType(Serenity.LookupEditorBase$2, [Object, Object]).call(this, hidden, null);
	};
	$Gimnet_Sertifika_Kategori_KategoriLookupEditor.__typeName = 'Gimnet.Sertifika.Kategori.KategoriLookupEditor';
	global.Gimnet.Sertifika.Kategori.KategoriLookupEditor = $Gimnet_Sertifika_Kategori_KategoriLookupEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Gimnet.Sertifika.SertifikaResim.SertifikaResimGridDialog
	var $Gimnet_Sertifika_SertifikaResim_SertifikaResimGridDialog = function() {
		this.$7$SertifikaField = null;
		this.$7$SertifikaResimGridField = null;
		Serenity.TemplatedDialog.call(this);
		//ById("GridDiv").Height(359).FlexHeightOnly();
		this.set_sertifikaResimGrid(new $Gimnet_Sertifika_SertifikaResimGrid(this.byId$1('GridDiv')));
	};
	$Gimnet_Sertifika_SertifikaResim_SertifikaResimGridDialog.__typeName = 'Gimnet.Sertifika.SertifikaResim.SertifikaResimGridDialog';
	global.Gimnet.Sertifika.SertifikaResim.SertifikaResimGridDialog = $Gimnet_Sertifika_SertifikaResim_SertifikaResimGridDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.HtmlBasicContentEditor
	var $Serenity_HtmlBasicContentEditor = function(textArea, opt) {
		Serenity.HtmlContentEditor.call(this, textArea, opt);
	};
	$Serenity_HtmlBasicContentEditor.__typeName = 'Serenity.HtmlBasicContentEditor';
	global.Serenity.HtmlBasicContentEditor = $Serenity_HtmlBasicContentEditor;
	ss.initClass($Gimnet_ScriptInitialization, $asm, {});
	ss.initClass($Gimnet_Administration_LanguageDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Gimnet_Administration_LanguageForm, $asm, {
		get_languageId: function() {
			return this.byId(Serenity.StringEditor).call(this, 'LanguageId');
		},
		get_languageName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'LanguageName');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Gimnet_Administration_LanguageGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($Gimnet_Administration_LanguageService, $asm, {});
	ss.initClass($Gimnet_Administration_PermissionCheckEditor, $asm, {
		getButtons: function() {
			return [];
		},
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.get_element(), ss.mkdel(this, function(field, text) {
				this.$containsText = Q.trimToNull(text);
				this.view.setItems(this.view.getItems(), true);
			}), null);
		},
		onViewFilter: function(item) {
			if (!ss.makeGenericType(Serenity.CheckTreeEditor$2, [Object, Object]).prototype.onViewFilter.call(this, item)) {
				return false;
			}
			var contains = Select2.util.stripDiacritics(ss.coalesce(this.$containsText, '')).toUpperCase();
			if (Q.isEmptyOrNull(contains)) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.text, '')).toUpperCase().indexOf(contains) !== -1) {
				return true;
			}
			return false;
		},
		getItems: function() {
			var list = [];
			var permissions = Q.getRemoteData('Administration.PermissionKeys').Entities;
			var permissionTitles = {};
			for (var i = 0; i < permissions.length; i++) {
				var p = permissions[i];
				permissionTitles[p] = ss.coalesce(Q.tryGetText('Permission.' + p), p);
			}
			permissions.sort(function(x, y) {
				return Q$Externals.turkishLocaleCompare(permissionTitles[x], permissionTitles[y]);
			});
			for (var $t1 = 0; $t1 < permissions.length; $t1++) {
				var permission = permissions[$t1];
				list.push({ id: permission, text: permissionTitles[permission] });
			}
			return list;
		}
	}, ss.makeGenericType(Serenity.CheckTreeEditor$1, [Object]), [Serenity.IDataGrid, Serenity.IGetEditValue, Serenity.ISetEditValue]);
	ss.initClass($Gimnet_Administration_PermissionModuleEditor, $asm, {}, ss.makeGenericType(Serenity.Select2Editor$2, [Object, String]), [Serenity.IStringValue]);
	ss.initClass($Gimnet_Administration_RoleCheckEditor, $asm, {
		getButtons: function() {
			return [];
		},
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.get_element(), ss.mkdel(this, function(field, text) {
				this.$containsText = Q.trimToNull(text);
				this.view.setItems(this.view.getItems(), true);
			}), null);
		},
		onViewFilter: function(item) {
			if (!ss.makeGenericType(Serenity.CheckTreeEditor$2, [Object, Object]).prototype.onViewFilter.call(this, item)) {
				return false;
			}
			var contains = Select2.util.stripDiacritics(ss.coalesce(this.$containsText, '')).toUpperCase();
			if (Q.isEmptyOrNull(contains)) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.text, '')).toUpperCase().indexOf(contains) !== -1) {
				return true;
			}
			return false;
		},
		getItems: function() {
			var list = [];
			var roles = Q.getLookup('Administration.Role').get_items();
			for (var $t1 = 0; $t1 < roles.length; $t1++) {
				var role = roles[$t1];
				list.push({ id: role.RoleId.toString(), text: role.RoleName });
			}
			return list;
		}
	}, ss.makeGenericType(Serenity.CheckTreeEditor$1, [Object]), [Serenity.IDataGrid, Serenity.IGetEditValue, Serenity.ISetEditValue]);
	ss.initClass($Gimnet_Administration_RoleDialog, $asm, {
		getToolbarButtons: function() {
			var buttons = ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.getToolbarButtons.call(this);
			buttons.push({ title: Q.text('Site.RolePermissionDialog.EditButton'), cssClass: 'lock-button', onClick: ss.mkdel(this, function() {
				(new $Gimnet_Administration_RolePermissionDialog({ roleID: ss.unbox(this.get_entity().RoleId), title: this.get_entity().RoleName })).dialogOpen();
			}) });
			return buttons;
		},
		updateInterface: function() {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.updateInterface.call(this);
			this.toolbar.findButton('lock-button').toggleClass('disabled', this.get_isNewOrDeleted());
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Gimnet_Administration_RoleForm, $asm, {
		get_roleName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'RoleName');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Gimnet_Administration_RoleGrid, $asm, {
		getDefaultSortBy: function() {
			var $t1 = [];
			$t1.push('RoleName');
			return $t1;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($Gimnet_Administration_RolePermissionDialog, $asm, {
		getDialogOptions: function() {
			var opt = ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			var $t1 = [];
			$t1.push({ text: Q.text('Dialogs.OkButton'), click: ss.mkdel(this, function() {
				$Gimnet_Administration_RolePermissionService.update({ RoleID: this.options.roleID, Permissions: this.$permissions.get_value(), Module: null, Submodule: null }, ss.mkdel(this, function(response) {
					this.dialogClose();
					window.setTimeout(function() {
						Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess'));
					}, 0);
				}), null);
			}) });
			$t1.push({ text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, this.dialogClose) });
			opt.buttons = $t1;
			opt.title = ss.formatString(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
			return opt;
		},
		getTemplate: function() {
			return "<div id='~_Permissions'></div>";
		}
	}, ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]), [Serenity.IDialog]);
	ss.initClass($Gimnet_Administration_RolePermissionService, $asm, {});
	ss.initClass($Gimnet_Administration_RoleService, $asm, {});
	ss.initClass($Gimnet_Administration_TranslationGrid, $asm, {
		onClick: function(e, row, cell) {
			ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onClick.call(this, e, row, cell);
			if (e.isDefaultPrevented()) {
				return;
			}
			if ($(e.target).hasClass('source-text')) {
				e.preventDefault();
				var item = this.view.rows[row];
				var done = ss.mkdel(this, function() {
					item.CustomText = item.SourceText;
					this.view.updateItem(item.Key, item);
					this.$hasChanges = true;
				});
				if (Q.isTrimmedEmpty(item.CustomText) || ss.referenceEquals(Q.trimToEmpty(item.CustomText), Q.trimToEmpty(item.SourceText))) {
					done();
					return;
				}
				Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
			}
			if ($(e.target).hasClass('target-text')) {
				e.preventDefault();
				var item1 = this.view.rows[row];
				var done1 = ss.mkdel(this, function() {
					item1.CustomText = item1.TargetText;
					this.view.updateItem(item1.Key, item1);
					this.$hasChanges = true;
				});
				if (Q.isTrimmedEmpty(item1.CustomText) || ss.referenceEquals(Q.trimToEmpty(item1.CustomText), Q.trimToEmpty(item1.TargetText))) {
					done1();
					return;
				}
				Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done1);
			}
		},
		getColumnsAsync: function() {
			var columns = [];
			columns.push({ field: 'Key', width: 300, sortable: false });
			columns.push({
				field: 'SourceText',
				width: 300,
				sortable: false,
				format: function(ctx) {
					return Q.outerHtml($('<a/>').addClass('source-text').text(ss.coalesce(ss.cast(ctx.value, String), '')));
				}
			});
			columns.push({
				field: 'CustomText',
				width: 300,
				sortable: false,
				format: function(ctx1) {
					return Q.outerHtml($('<input/>').addClass('custom-text').attr('value', ss.cast(ctx1.value, String)).attr('type', 'text').attr('data-key', ss.cast(ctx1.item.Key, String)));
				}
			});
			columns.push({
				field: 'TargetText',
				width: 300,
				sortable: false,
				format: function(ctx2) {
					return Q.outerHtml($('<a/>').addClass('target-text').text(ss.coalesce(ss.cast(ctx2.value, String), '')));
				}
			});
			return RSVP.resolve(columns);
		},
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t2 = ss.mkdel(this, function(e) {
				e.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Administration.Translation.SourceLanguage') + ' ---');
			});
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Administration.Language';
			this.$sourceLanguage = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t2, $t1, null);
			Serenity.WX.changeSelect2(this.$sourceLanguage, ss.mkdel(this, function(e1) {
				if (this.$hasChanges) {
					this.saveChanges(this.$targetLanguageKey).then(ss.mkdel(this, this.refresh), null);
				}
				else {
					this.refresh();
				}
			}));
			var $t4 = ss.mkdel(this, function(e2) {
				e2.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Administration.Translation.TargetLanguage') + ' ---');
			});
			var $t3 = Serenity.LookupEditorOptions.$ctor();
			$t3.lookupKey = 'Administration.Language';
			this.$targetLanguage = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t4, $t3, null);
			Serenity.WX.changeSelect2(this.$targetLanguage, ss.mkdel(this, function(e3) {
				if (this.$hasChanges) {
					this.saveChanges(this.$targetLanguageKey).then(ss.mkdel(this, this.refresh), null);
				}
				else {
					this.refresh();
				}
			}));
		},
		saveChanges: function(language) {
			var translations = {};
			var $t1 = this.view.getItems();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var item = $t1[$t2];
				translations[item.Key] = item.CustomText;
			}
			return RSVP.resolve($Gimnet_Administration_TranslationService.update({ TargetLanguageID: language, Translations: translations }, null, null)).then(ss.mkdel(this, function() {
				this.$hasChanges = false;
				Q.notifySuccess('User translations in "' + language + '" language are saved to "user.texts.' + language + '.json" ' + 'file under "~/script/site/texts/user/"');
			}), null);
		},
		onViewSubmit: function() {
			var request = this.view.params;
			request.SourceLanguageID = this.$sourceLanguage.get_value();
			this.$targetLanguageKey = ss.coalesce(this.$targetLanguage.get_value(), '');
			request.TargetLanguageID = this.$targetLanguageKey;
			this.$hasChanges = false;
			return ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this);
		},
		getButtons: function() {
			var $t1 = [];
			$t1.push({ title: 'Save Changes', onClick: ss.mkdel(this, function(e) {
				this.saveChanges(this.$targetLanguageKey).then(ss.mkdel(this, this.refresh), null);
			}), cssClass: 'apply-changes-button' });
			return $t1;
		},
		createQuickSearchInput: function() {
			Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.get_element(), ss.mkdel(this, function(field, searchText) {
				this.$searchText = searchText;
				this.view.setItems(this.view.getItems(), true);
			}), null);
		},
		onViewFilter: function(item) {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewFilter.call(this, item)) {
				return false;
			}
			if (Q.isEmptyOrNull(this.$searchText)) {
				return true;
			}
			var searching = Select2.util.stripDiacritics(this.$searchText).toLowerCase();
			if (Q.isEmptyOrNull(searching)) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.Key, '')).toLowerCase().indexOf(searching) >= 0) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.SourceText, '')).toLowerCase().indexOf(searching) >= 0) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.TargetText, '')).toLowerCase().indexOf(searching) >= 0) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.CustomText, '')).toLowerCase().indexOf(searching) >= 0) {
				return true;
			}
			return false;
		},
		usePager: function() {
			return false;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($Gimnet_Administration_TranslationService, $asm, {});
	ss.initClass($Gimnet_Administration_UserDialog, $asm, {
		getToolbarButtons: function() {
			var buttons = ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.getToolbarButtons.call(this);
			buttons.push({ title: Q.text('Site.UserDialog.EditRolesButton'), cssClass: 'users-button', onClick: ss.mkdel(this, function() {
				(new $Gimnet_Administration_UserRoleDialog({ userID: ss.unbox(this.get_entity().UserId), username: this.get_entity().Username })).dialogOpen();
			}) });
			buttons.push({ title: Q.text('Site.UserDialog.EditPermissionsButton'), cssClass: 'lock-button', onClick: ss.mkdel(this, function() {
				(new $Gimnet_Administration_UserPermissionDialog({ userID: ss.unbox(this.get_entity().UserId), username: this.get_entity().Username })).dialogOpen();
			}) });
			return buttons;
		},
		updateInterface: function() {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.updateInterface.call(this);
			this.toolbar.findButton('users-button').toggleClass('disabled', this.get_isNewOrDeleted());
			this.toolbar.findButton('lock-button').toggleClass('disabled', this.get_isNewOrDeleted());
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Gimnet_Administration_UserForm, $asm, {
		get_username: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Username');
		},
		get_displayName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'DisplayName');
		},
		get_email: function() {
			return this.byId(Serenity.EmailEditor).call(this, 'Email');
		},
		get_password: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'Password');
		},
		get_passwordConfirm: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'PasswordConfirm');
		},
		get_source: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Source');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Gimnet_Administration_UserGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'UserId', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'Username', width: 150, format: this.itemLink(null, null, null, null, true) });
			columns.push({ field: 'DisplayName', width: 150 });
			columns.push({ field: 'Email', width: 250 });
			columns.push({ field: 'Source', width: 100 });
			return columns;
		},
		getDefaultSortBy: function() {
			var $t1 = [];
			$t1.push('Username');
			return $t1;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Gimnet_Administration_UserPermissionDialog, $asm, {
		getDialogOptions: function() {
			var opt = ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			var $t1 = [];
			$t1.push({ text: Q.text('Dialogs.OkButton'), click: ss.mkdel(this, function() {
				$Gimnet_Administration_UserPermissionService.update({ UserID: this.options.userID, Permissions: this.$permissions.get_value(), Module: null, Submodule: null }, ss.mkdel(this, function(response) {
					this.dialogClose();
					window.setTimeout(function() {
						Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess'));
					}, 0);
				}), null);
			}) });
			$t1.push({ text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, this.dialogClose) });
			opt.buttons = $t1;
			opt.title = ss.formatString(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
			return opt;
		},
		getTemplate: function() {
			return "<div id='~_Permissions'></div>";
		}
	}, ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]), [Serenity.IDialog]);
	ss.initClass($Gimnet_Administration_UserPermissionService, $asm, {});
	ss.initClass($Gimnet_Administration_UserRoleDialog, $asm, {
		getDialogOptions: function() {
			var opt = ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			var $t1 = [];
			$t1.push({ text: Q.text('Dialogs.OkButton'), click: ss.mkdel(this, function() {
				$Gimnet_Administration_UserRoleService.update({ UserID: this.options.userID, Roles: Enumerable.from(this.$permissions.get_value()).select(function(x) {
					return parseInt(x, 10);
				}).toArray() }, ss.mkdel(this, function(response) {
					this.dialogClose();
					window.setTimeout(function() {
						Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
					}, 0);
				}), null);
			}) });
			$t1.push({ text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, this.dialogClose) });
			opt.buttons = $t1;
			opt.title = ss.formatString(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
			return opt;
		},
		getTemplate: function() {
			return "<div id='~_Roles'></div>";
		}
	}, ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]), [Serenity.IDialog]);
	ss.initClass($Gimnet_Administration_UserRoleService, $asm, {});
	ss.initClass($Gimnet_Administration_UserService, $asm, {});
	ss.initClass($Gimnet_Common_LanguageSelection, $asm, {
		getLookupAsync: function() {
			return ss.makeGenericType(Serenity.LookupEditorBase$2, [Object, Object]).prototype.getLookupAsync.call(this).then(ss.mkdel(this, function(x) {
				if (!Enumerable.from(x.get_items()).any(ss.mkdel(this, function(z) {
					return ss.referenceEquals(z.LanguageId, this.$currentLanguage);
				}))) {
					var idx = this.$currentLanguage.lastIndexOf('-');
					if (idx >= 0) {
						this.$currentLanguage = this.$currentLanguage.substr(0, idx);
						if (!Enumerable.from(x.get_items()).any(ss.mkdel(this, function(z1) {
							return ss.referenceEquals(z1.LanguageId, this.$currentLanguage);
						}))) {
							this.$currentLanguage = 'en';
						}
					}
					else {
						this.$currentLanguage = 'en';
					}
				}
				return x;
			}), null);
		},
		updateItemsAsync: function() {
			return ss.makeGenericType(Serenity.LookupEditorBase$2, [Object, Object]).prototype.updateItemsAsync.call(this).then(ss.mkdel(this, function() {
				this.set_value(this.$currentLanguage);
			}), null);
		},
		getLookupKey: function() {
			return 'Administration.Language';
		},
		emptyItemText: function() {
			return null;
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]), [Serenity.IStringValue, Serenity.IAsyncInit]);
	ss.initClass($Gimnet_Common_SidebarSearch, $asm, {
		$updateMatchFlags: function(text) {
			var liList = this.$menuUL.find('li').removeClass('non-match');
			text = Q.trimToNull(text);
			if (ss.isNullOrUndefined(text)) {
				liList.removeClass('active');
				liList.show();
				liList.children('ul').addClass('collapse');
				return;
			}
			var parts = ss.netSplit(text, [44, 32].map(function(i) {
				return String.fromCharCode(i);
			}), null, 1);
			for (var i = 0; i < parts.length; i++) {
				parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
			}
			var items = liList;
			items.each(function(i1, e) {
				var x = $(e);
				var title = Select2.util.stripDiacritics(ss.coalesce(x.text(), '').toUpperCase());
				for (var $t1 = 0; $t1 < parts.length; $t1++) {
					var p = parts[$t1];
					if (ss.isValue(p) && !(title.indexOf(p) !== -1)) {
						x.addClass('non-match');
						break;
					}
				}
			});
			var matchingItems = items.not('.non-match');
			var visibles = matchingItems.parents('li').add(matchingItems);
			var nonVisibles = liList.not(visibles);
			nonVisibles.hide().addClass('non-match');
			visibles.show();
			liList.children('ul').removeClass('collapse');
		}
	}, Serenity.Widget);
	ss.initClass($Gimnet_Duyuru_DuyuruDialog, $asm, {
		loadEntity: function(entity) {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.loadEntity.call(this, entity);
			if (this.get_isNew()) {
				this.$form.get_eklemeTarihi().set_value('Today');
				if (ss.isNullOrEmptyString(this.$form.get_sonTarih().get_value())) {
					var $t2 = this.$form.get_sonTarih();
					var $t1 = new Date();
					$t2.set_value((new Date($t1.getFullYear() + 1, $t1.getMonth(), $t1.getDate(), $t1.getHours(), $t1.getMinutes(), $t1.getSeconds(), $t1.getMilliseconds())).toDateString());
				}
			}
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Gimnet_Duyuru_DuyuruForm, $asm, {
		get_baslik: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Baslik');
		},
		get_duyuruMetni: function() {
			return this.byId($Serenity_HtmlBasicContentEditor).call(this, 'DuyuruMetni');
		},
		get_sonTarih: function() {
			return this.byId(Serenity.DateEditor).call(this, 'SonTarih');
		},
		get_eklemeTarihi: function() {
			return this.byId(Serenity.DateEditor).call(this, 'EklemeTarihi');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Gimnet_Duyuru_DuyuruGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Gimnet_Duyuru_DuyuruService, $asm, {});
	ss.initClass($Gimnet_HelalDunyaMarket_HelalMarketDialog, $asm, {
		loadEntity: function(entity) {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.loadEntity.call(this, entity);
			if (this.get_isNew()) {
				this.$form.get_eklemeTarihi().set_value('Today');
			}
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Gimnet_HelalDunyaMarket_HelalMarketForm, $asm, {
		get_adi: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Adi');
		},
		get_acikAdres: function() {
			return this.byId(Serenity.TextAreaEditor).call(this, 'AcikAdres');
		},
		get_adresAciklama: function() {
			return this.byId(Serenity.StringEditor).call(this, 'AdresAciklama');
		},
		get_sorumluKisi: function() {
			return this.byId(Serenity.StringEditor).call(this, 'SorumluKisi');
		},
		get_telefon1: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Telefon1');
		},
		get_telefon2: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Telefon2');
		},
		get_koordinat: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Koordinat');
		},
		get_eklemeTarihi: function() {
			return this.byId(Serenity.DateEditor).call(this, 'EklemeTarihi');
		},
		get_guncellemeTarihi: function() {
			return this.byId(Serenity.DateEditor).call(this, 'GuncellemeTarihi');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Gimnet_HelalDunyaMarket_HelalMarketGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Gimnet_HelalDunyaMarket_HelalMarketService, $asm, {});
	ss.initClass($Gimnet_Membership_LoginForm, $asm, {
		get_username: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Username');
		},
		get_password: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'Password');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Gimnet_Membership_LoginPanel, $asm, {}, ss.makeGenericType(Serenity.PropertyDialog$1, [Object]), [Serenity.IDialog]);
	ss.initClass($Gimnet_Sertifika_FirmaDialog, $asm, {
		loadEntity: function(entity) {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.loadEntity.call(this, entity);
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initEnum($Gimnet_Sertifika_FirmaDurumIds, $asm, { None: 0, Normal: 1, Yasakli: 2 });
	ss.initClass($Gimnet_Sertifika_FirmaForm, $asm, {
		get_firmaAdi: function() {
			return this.byId(Serenity.StringEditor).call(this, 'FirmaAdi');
		},
		get_kucukLogo: function() {
			return this.byId(Serenity.StringEditor).call(this, 'KucukLogo');
		},
		get_ortaLogo: function() {
			return this.byId(Serenity.StringEditor).call(this, 'OrtaLogo');
		},
		get_buyukLogo: function() {
			return this.byId($Gimnet_Sertifika_FirmaLogoUploadEditor).call(this, 'BuyukLogo');
		},
		get_konumSehir: function() {
			return this.byId(Serenity.StringEditor).call(this, 'KonumSehir');
		},
		get_telefon: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Telefon');
		},
		get_webSayfasi: function() {
			return this.byId(Serenity.StringEditor).call(this, 'WebSayfasi');
		},
		get_iletisimEmail: function() {
			return this.byId(Serenity.StringEditor).call(this, 'IletisimEmail');
		},
		get_durum: function() {
			return this.byId(Serenity.EnumEditor).call(this, 'Durum');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Gimnet_Sertifika_FirmaGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Gimnet_Sertifika_FirmaLogoUploadEditor, $asm, {
		getToolButtons: function() {
			var buttons = Serenity.ImageUploadEditor.prototype.getToolButtons.call(this);
			var addButton = Enumerable.from(buttons).firstOrDefault(function(s) {
				return s.cssClass === 'add-file-button';
			}, ss.getDefaultValue(Object));
			addButton.title = 'Resim Değiştir';
			var deleteButton = Enumerable.from(buttons).firstOrDefault(function(s1) {
				return s1.cssClass === 'delete-button';
			}, ss.getDefaultValue(Object));
			deleteButton.title = '';
			return buttons;
		},
		populate: function() {
			var displayOriginalName = !Q.isTrimmedEmpty(this.options.originalNameProperty);
			if (ss.isNullOrUndefined(this.entity)) {
				this.$populateFileSymbols(this.fileSymbols, null, displayOriginalName);
			}
			else {
				this.$populateFileSymbols(this.fileSymbols, this.entity, displayOriginalName);
			}
		},
		$populateFileSymbols: function(fileElement, file, displayOriginalName) {
			fileElement.html('');
			if (ss.isNullOrUndefined(file) || Q.isEmptyOrNull(file.filename)) {
				return;
			}
			var li = $('<li/>');
			var isImage = Serenity.UploadHelper.hasImageExtension(file.filename);
			var thumb = $('<a/>').appendTo(li);
			var originalName = ss.coalesce(file.originalName, '');
			var fileName = file.filename;
			//if (!fileName.StartsWith("temporary/"))
			//    fileName = "personelFoto/" + fileName;
			thumb.attr('href', Serenity.UploadHelper.dbFileUrl(fileName));
			thumb.attr('target', '_blank');
			if (!Q.isEmptyOrNull(originalName)) {
				thumb.attr('title', originalName);
			}
			var img = $('<img/>').attr('src', Serenity.UploadHelper.dbFileUrl(fileName)).appendTo(thumb);
			Serenity.UploadHelper.colorBox(thumb, new Object());
			if (displayOriginalName) {
				$('<div/>').addClass('filename').text(originalName).attr('title', originalName).appendTo(li);
			}
			li.appendTo(fileElement);
		}
	}, Serenity.ImageUploadEditor, [Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly]);
	ss.initClass($Gimnet_Sertifika_FirmaService, $asm, {});
	ss.initClass($Gimnet_Sertifika_HelalSertifikaDialog, $asm, {
		loadEntity: function(entity) {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.loadEntity.call(this, entity);
		},
		initToolbar: function() {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.initToolbar.call(this);
			var quicAccessDiv = this.toolbar.findButton('quick-access-menu-button');
		},
		getToolbarButtons: function() {
			var buttons = ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.getToolbarButtons.call(this);
			buttons.push({ title: 'Sertifika Resimleri', cssClass: 'quick-access-menu-button', onClick: ss.mkdel(this, function() {
				(new $Gimnet_Sertifika_SertifikaResim_SertifikaResimGridDialog()).loadByIdAndOpenDialog(ss.unbox(this.get_entity().Id));
			}) });
			return buttons;
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Gimnet_Sertifika_HelalSertifikaForm, $asm, {
		get_kategoriId: function() {
			return this.byId($Gimnet_Sertifika_Kategori_KategoriLookupEditor).call(this, 'KategoriId');
		},
		get_firmaId: function() {
			return this.byId($Gimnet_Sertifika_Firma_FirmaLookupEditor).call(this, 'FirmaId');
		},
		get_marka: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Marka');
		},
		get_İlkBasvuruTarihi: function() {
			return this.byId(Serenity.DateEditor).call(this, 'İlkBasvuruTarihi');
		},
		get_yenilemeTarihi: function() {
			return this.byId(Serenity.DateEditor).call(this, 'YenilemeTarihi');
		},
		get_sertifikaKapsami: function() {
			return this.byId(Serenity.TextAreaEditor).call(this, 'SertifikaKapsami');
		},
		get_durum: function() {
			return this.byId(Serenity.EnumEditor).call(this, 'Durum');
		},
		get_kapsamDisi: function() {
			return this.byId(Serenity.StringEditor).call(this, 'KapsamDisi');
		},
		get_bitisTarihi: function() {
			return this.byId(Serenity.DateEditor).call(this, 'BitisTarihi');
		},
		get_İptalAciklamasi: function() {
			return this.byId(Serenity.StringEditor).call(this, 'İptalAciklamasi');
		},
		get_sertifikaResimleri: function() {
			return this.byId(Serenity.StringEditor).call(this, 'SertifikaResimleri');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Gimnet_Sertifika_HelalSertifikaGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Gimnet_Sertifika_HelalSertifikaService, $asm, {});
	ss.initClass($Gimnet_Sertifika_KategoriDialog, $asm, {
		loadEntity: function(entity) {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.loadEntity.call(this, entity);
			if (this.get_isNew()) {
				this.$form.get_eklenmeTarihi().set_value('Today');
			}
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Gimnet_Sertifika_KategoriForm, $asm, {
		get_kategoriAdi: function() {
			return this.byId(Serenity.StringEditor).call(this, 'KategoriAdi');
		},
		get_eklenmeTarihi: function() {
			return this.byId(Serenity.DateEditor).call(this, 'EklenmeTarihi');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Gimnet_Sertifika_KategoriGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Gimnet_Sertifika_KategoriService, $asm, {});
	ss.initEnum($Gimnet_Sertifika_SertifikaDurumIds, $asm, { None: 0, Gecerli: 1, SuresiGecmis: 2 });
	ss.initClass($Gimnet_Sertifika_SertifikaResimDialog, $asm, {
		loadEntity: function(entity) {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.loadEntity.call(this, entity);
			this.$form.get_sertifikaId().set_value$1(this.get_sertifikaId());
			//entity.SertifikaId = SertifikaId;
		},
		getSaveEntity: function() {
			var entity = ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.getSaveEntity.call(this);
			entity.SertifikaId = this.get_sertifikaId();
			return entity;
		},
		get_sertifikaId: function() {
			return this.$8$SertifikaIdField;
		},
		set_sertifikaId: function(value) {
			this.$8$SertifikaIdField = value;
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Gimnet_Sertifika_SertifikaResimForm, $asm, {
		get_resimKonumu: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ResimKonumu');
		},
		get_eklenmeTarihi: function() {
			return this.byId(Serenity.DateEditor).call(this, 'EklenmeTarihi');
		},
		get_sertifikaId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'SertifikaId');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Gimnet_Sertifika_SertifikaResimGrid, $asm, {
		get_sertifikaRow: function() {
			return this.$sertifikaRow;
		},
		set_sertifikaRow: function(value) {
			this.$sertifikaRow = value;
			this.refresh();
		},
		createEntityDialog: function(itemType, callback) {
			var dialog = ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createEntityDialog.call(this, itemType, callback);
			if (ss.referenceEquals(itemType, this.getItemType())) {
				dialog.set_sertifikaId(this.$sertifikaRow.Id);
			}
			return dialog;
		},
		onViewSubmit: function() {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this)) {
				return false;
			}
			if (ss.isNullOrUndefined(this.$sertifikaRow) || ss.isNullOrUndefined(this.$sertifikaRow.Id)) {
				return false;
			}
			var eqFilter = {};
			eqFilter['SertifikaId'] = this.$sertifikaRow.Id;
			this.view.params.EqualityFilter = eqFilter;
			return true;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Gimnet_Sertifika_SertifikaResimleriUploadEditor, $asm, {}, Serenity.MultipleImageUploadEditor, [Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly]);
	ss.initClass($Gimnet_Sertifika_SertifikaResimService, $asm, {});
	ss.initClass($Gimnet_Sertifika_SupportUtility, $asm, {}, Serenity.ScriptContext);
	ss.initClass($Gimnet_Sertifika_Firma_FirmaLookupEditor, $asm, {
		getLookupKey: function() {
			return 'Sertifika.Firmalar';
		},
		getItems: function(lookup) {
			return Enumerable.from(ss.makeGenericType(Serenity.LookupEditorBase$2, [Object, Object]).prototype.getItems.call(this, lookup)).where(function(x) {
				return ss.isValue(x.FirmaAdi);
			});
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$2, [Object, Object]), [Serenity.IStringValue]);
	ss.initClass($Gimnet_Sertifika_Kategori_KategoriLookupEditor, $asm, {
		getLookupKey: function() {
			return 'Sertifika.Kategoriler';
		},
		getItems: function(lookup) {
			return Enumerable.from(ss.makeGenericType(Serenity.LookupEditorBase$2, [Object, Object]).prototype.getItems.call(this, lookup)).where(function(x) {
				return ss.isValue(x.KategoriAdi);
			});
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$2, [Object, Object]), [Serenity.IStringValue]);
	ss.initClass($Gimnet_Sertifika_SertifikaResim_SertifikaResimGridDialog, $asm, {
		get_sertifika: function() {
			return this.$7$SertifikaField;
		},
		set_sertifika: function(value) {
			this.$7$SertifikaField = value;
		},
		get_sertifikaResimGrid: function() {
			return this.$7$SertifikaResimGridField;
		},
		set_sertifikaResimGrid: function(value) {
			this.$7$SertifikaResimGridField = value;
		},
		onDialogOpen: function() {
			ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.onDialogOpen.call(this);
			$('.ui-widget-overlay.ui-front').last().css('opacity', '0.5');
		},
		getToolbarButtons: function() {
			return [];
		},
		getDialogOptions: function() {
			var dialogOptions = ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			dialogOptions.resizable = true;
			return dialogOptions;
		},
		getTemplateName: function() {
			return 'GridDialog';
		},
		updateTitle: function() {
			if (ss.isNullOrUndefined(this.get_sertifika())) {
				return;
			}
			this.element.dialog().dialog('option', 'title', 'Başlık buaraya gelecek');
			// string.Format("Diğer Sosyal Güvenlik ({0} - {1})", Personel.AdiSoyadi, Personel.KimlikNo);
		},
		loadByIdAndOpenDialog: function(sertifikaID) {
			this.set_sertifikaID(sertifikaID);
			this.dialogOpen();
		},
		get_sertifikaID: function() {
			return (ss.isValue(this.get_sertifika()) ? this.get_sertifika().Id : null);
		},
		set_sertifikaID: function(value) {
			if (ss.isNullOrUndefined(this.get_sertifika()) || !ss.referenceEquals(this.get_sertifika().Id, value)) {
				var sertID = value;
				$Gimnet_Sertifika_HelalSertifikaService.retrieve({ EntityId: ss.unbox(sertID) }, ss.mkdel(this, function(response) {
					this.set_sertifika(response.Entity);
					this.get_sertifikaResimGrid().set_sertifikaRow(this.get_sertifika());
					this.updateTitle();
				}), null);
			}
		}
	}, Serenity.TemplatedDialog, [Serenity.IDialog]);
	ss.initClass($Serenity_HtmlBasicContentEditor, $asm, {
		getConfig: function() {
			var config = Serenity.HtmlContentEditor.prototype.getConfig.call(this);
			config.removeButtons += ',Undo,Redo,Cut,Copy,Paste,BulletedList,NumberedList,Indent,Outdent,SpecialChar,Subscript,Superscript,PasteText,PasteFromWord,Strike,Unlink,CreatePlaceholder,Image,Table,HorizontalRule,Source,Maximize,Format,Anchor,Blockquote,CreatePlaceholder,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,Superscript,RemoveFormat';
			config.removePlugins += ',elementspath';
			return config;
		}
	}, Serenity.HtmlContentEditor, [Serenity.IStringValue]);
	ss.setMetadata($Gimnet_Administration_LanguageDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('LanguageName'), new Serenity.FormKeyAttribute('Administration.Language'), new Serenity.LocalTextPrefixAttribute('Administration.Language'), new Serenity.ServiceAttribute('Administration/Language')] });
	ss.setMetadata($Gimnet_Administration_LanguageGrid, { attr: [new Serenity.ColumnsKeyAttribute('Administration.Language'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('LanguageName'), new Serenity.DialogTypeAttribute($Gimnet_Administration_LanguageDialog), new Serenity.LocalTextPrefixAttribute('Administration.Language'), new Serenity.ServiceAttribute('Administration/Language')] });
	ss.setMetadata($Gimnet_Administration_PermissionCheckEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($Gimnet_Administration_PermissionModuleEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($Gimnet_Administration_RoleCheckEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($Gimnet_Administration_RoleDialog, { attr: [new Serenity.IdPropertyAttribute('RoleId'), new Serenity.NamePropertyAttribute('RoleName'), new Serenity.FormKeyAttribute('Administration.Role'), new Serenity.LocalTextPrefixAttribute('Administration.Role'), new Serenity.ServiceAttribute('Administration/Role')] });
	ss.setMetadata($Gimnet_Administration_RoleGrid, { attr: [new Serenity.ColumnsKeyAttribute('Administration.Role'), new Serenity.IdPropertyAttribute('RoleId'), new Serenity.NamePropertyAttribute('RoleName'), new Serenity.DialogTypeAttribute($Gimnet_Administration_RoleDialog), new Serenity.LocalTextPrefixAttribute('Administration.Role'), new Serenity.ServiceAttribute('Administration/Role')] });
	ss.setMetadata($Gimnet_Administration_TranslationGrid, { attr: [new Serenity.ColumnsKeyAttribute('Administration.Translation'), new Serenity.IdPropertyAttribute('Key'), new Serenity.LocalTextPrefixAttribute('Administration.Translation'), new Serenity.ServiceAttribute('Administration/Translation')] });
	ss.setMetadata($Gimnet_Administration_UserDialog, { attr: [new Serenity.IdPropertyAttribute('UserId'), new Serenity.NamePropertyAttribute('Username'), new Serenity.IsActivePropertyAttribute('IsActive'), new Serenity.FormKeyAttribute('Administration.User'), new Serenity.LocalTextPrefixAttribute('Administration.User'), new Serenity.ServiceAttribute('Administration/User')] });
	ss.setMetadata($Gimnet_Administration_UserGrid, { attr: [new Serenity.IdPropertyAttribute('UserId'), new Serenity.NamePropertyAttribute('Username'), new Serenity.IsActivePropertyAttribute('IsActive'), new Serenity.DialogTypeAttribute($Gimnet_Administration_UserDialog), new Serenity.LocalTextPrefixAttribute('Administration.User'), new Serenity.ServiceAttribute('Administration/User')] });
	ss.setMetadata($Gimnet_Duyuru_DuyuruDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Baslik'), new Serenity.FormKeyAttribute('Duyuru.Duyuru'), new Serenity.LocalTextPrefixAttribute('Duyuru.Duyuru'), new Serenity.ServiceAttribute('Duyuru/Duyuru')] });
	ss.setMetadata($Gimnet_Duyuru_DuyuruGrid, { attr: [new Serenity.ColumnsKeyAttribute('Duyuru.Duyuru'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Baslik'), new Serenity.DialogTypeAttribute($Gimnet_Duyuru_DuyuruDialog), new Serenity.LocalTextPrefixAttribute('Duyuru.Duyuru'), new Serenity.ServiceAttribute('Duyuru/Duyuru')] });
	ss.setMetadata($Gimnet_HelalDunyaMarket_HelalMarketDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Adi'), new Serenity.FormKeyAttribute('HelalDunyaMarket.HelalMarket'), new Serenity.LocalTextPrefixAttribute('HelalDunyaMarket.HelalMarket'), new Serenity.ServiceAttribute('HelalDunyaMarket/HelalMarket')] });
	ss.setMetadata($Gimnet_HelalDunyaMarket_HelalMarketGrid, { attr: [new Serenity.ColumnsKeyAttribute('HelalDunyaMarket.HelalMarket'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Adi'), new Serenity.DialogTypeAttribute($Gimnet_HelalDunyaMarket_HelalMarketDialog), new Serenity.LocalTextPrefixAttribute('HelalDunyaMarket.HelalMarket'), new Serenity.ServiceAttribute('HelalDunyaMarket/HelalMarket')] });
	ss.setMetadata($Gimnet_Membership_LoginPanel, { attr: [new Serenity.PanelAttribute(), new Serenity.FormKeyAttribute('Membership.Login')] });
	ss.setMetadata($Gimnet_Sertifika_FirmaDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('FirmaAdi'), new Serenity.FormKeyAttribute('Sertifika.Firma'), new Serenity.LocalTextPrefixAttribute('Sertifika.Firma'), new Serenity.ServiceAttribute('Sertifika/Firma')] });
	ss.setMetadata($Gimnet_Sertifika_FirmaDurumIds, { attr: [new Serenity.EnumKeyAttribute('Gimnet.Sertifika.FirmaDurumIds')] });
	ss.setMetadata($Gimnet_Sertifika_FirmaGrid, { attr: [new Serenity.ColumnsKeyAttribute('Sertifika.Firma'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('FirmaAdi'), new Serenity.DialogTypeAttribute($Gimnet_Sertifika_FirmaDialog), new Serenity.LocalTextPrefixAttribute('Sertifika.Firma'), new Serenity.ServiceAttribute('Sertifika/Firma')] });
	ss.setMetadata($Gimnet_Sertifika_FirmaLogoUploadEditor, { attr: [new Serenity.EditorAttribute(), new System.ComponentModel.DisplayNameAttribute('Resim Yükleme'), new Serenity.OptionsTypeAttribute(Serenity.ImageUploadEditorOptions), new Serenity.ElementAttribute('<div/>')] });
	ss.setMetadata($Gimnet_Sertifika_HelalSertifikaDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Marka'), new Serenity.FormKeyAttribute('Sertifika.HelalSertifika'), new Serenity.LocalTextPrefixAttribute('Sertifika.HelalSertifika'), new Serenity.ServiceAttribute('Sertifika/HelalSertifika')] });
	ss.setMetadata($Gimnet_Sertifika_HelalSertifikaGrid, { attr: [new Serenity.ColumnsKeyAttribute('Sertifika.HelalSertifika'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('Marka'), new Serenity.DialogTypeAttribute($Gimnet_Sertifika_HelalSertifikaDialog), new Serenity.LocalTextPrefixAttribute('Sertifika.HelalSertifika'), new Serenity.ServiceAttribute('Sertifika/HelalSertifika')] });
	ss.setMetadata($Gimnet_Sertifika_KategoriDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('KategoriAdi'), new Serenity.FormKeyAttribute('Sertifika.Kategori'), new Serenity.LocalTextPrefixAttribute('Sertifika.Kategori'), new Serenity.ServiceAttribute('Sertifika/Kategori')] });
	ss.setMetadata($Gimnet_Sertifika_KategoriGrid, { attr: [new Serenity.ColumnsKeyAttribute('Sertifika.Kategori'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('KategoriAdi'), new Serenity.DialogTypeAttribute($Gimnet_Sertifika_KategoriDialog), new Serenity.LocalTextPrefixAttribute('Sertifika.Kategori'), new Serenity.ServiceAttribute('Sertifika/Kategori')] });
	ss.setMetadata($Gimnet_Sertifika_SertifikaDurumIds, { attr: [new Serenity.EnumKeyAttribute('Gimnet.Sertifika.SertifikaDurumIds')] });
	ss.setMetadata($Gimnet_Sertifika_SertifikaResimDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('ResimKonumu'), new Serenity.FormKeyAttribute('Sertifika.SertifikaResim'), new Serenity.LocalTextPrefixAttribute('Sertifika.SertifikaResim'), new Serenity.ServiceAttribute('Sertifika/SertifikaResim')] });
	ss.setMetadata($Gimnet_Sertifika_SertifikaResimGrid, { attr: [new Serenity.ColumnsKeyAttribute('Sertifika.SertifikaResim'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('ResimKonumu'), new Serenity.DialogTypeAttribute($Gimnet_Sertifika_SertifikaResimDialog), new Serenity.LocalTextPrefixAttribute('Sertifika.SertifikaResim'), new Serenity.ServiceAttribute('Sertifika/SertifikaResim')] });
	ss.setMetadata($Gimnet_Sertifika_SertifikaResimleriUploadEditor, { attr: [new Serenity.EditorAttribute(), new System.ComponentModel.DisplayNameAttribute('Sertifika Resimleri'), new Serenity.OptionsTypeAttribute(Serenity.ImageUploadEditorOptions), new Serenity.ElementAttribute('<div/>')] });
	ss.setMetadata($Gimnet_Sertifika_Firma_FirmaLookupEditor, { attr: [new Serenity.EditorAttribute(), new System.ComponentModel.DisplayNameAttribute('Firma Adı')] });
	ss.setMetadata($Gimnet_Sertifika_Kategori_KategoriLookupEditor, { attr: [new Serenity.EditorAttribute(), new System.ComponentModel.DisplayNameAttribute('Kategori')] });
	ss.setMetadata($Gimnet_Sertifika_SertifikaResim_SertifikaResimGridDialog, { attr: [new Serenity.IdPropertyAttribute('Id')] });
	ss.setMetadata($Serenity_HtmlBasicContentEditor, { attr: [new Serenity.EditorAttribute(), new System.ComponentModel.DisplayNameAttribute('Html İçerik (En Temel Set)'), new Serenity.OptionsTypeAttribute(Serenity.HtmlContentEditorOptions), new Serenity.ElementAttribute('<textarea />')] });
	(function() {
		Q$Config.rootNamespaces.push('Gimnet');
	})();
})();
