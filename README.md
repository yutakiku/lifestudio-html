**scssコンパイル方法**  
```
$ cd /保存先のパス/lifestudio-html/common  
$ compass w  
```

**@minin仕様**
https://photocreate.qiita.com/shared/items/cc94440a81c93c72714f#n%E8%A1%8C%E7%9B%AE%E4%BB%A5%E9%99%8D%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E7%9C%81%E7%95%A5

**style 書き方**
```
style {
	//PCのスタイル
	@media #{$tablet} {
		//tabletのスタイル
	}
	@media #{$mobile} {
		//SPのスタイル
	}
}
```