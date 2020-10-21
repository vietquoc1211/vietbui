export class MenuConfig {
	public defaults: any = {
		aside: {
			self: {},
			items: [
				{
					title: 'Dashboard',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: '/dashboard',
					translate: 'MENU.DASHBOARD',
					bullet: 'dot',
				},
				{section: 'Hàng hóa'},
				{
					title: 'Danh Mục',
					bullet: 'dot',
					icon: 'flaticon2-list-2',
					root: true,
					submenu: [
						{
							title: 'Danh mục nhóm hàng hóa',
							page: '/my-page',
						},
						{
							title: 'Danh mục loại hàng hóa',
							page: ''
						},
						{
							title: 'Danh mục hàng hóa',
							page: '/ecommerce/products'
						},
					]
				}
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
