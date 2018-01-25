***デザイン（zeplin）***  
https://app.zeplin.io/project/5a0d9d252f1bde4ed240dd58/dashboard?  
https://app.zeplin.io/project/5a2525679ffb95065f248fa3/dashboard?  
https://app.zeplin.io/project/5a40a85f14fb0c00afd119c6/dashboard?  

画像はzeplinのPC版のデザインからダウンロードできます。


**scssコンパイル方法**  
```
$ cd /保存先のパス/lifestudio-html/common  
$ compass w  
```

**@minin仕様**

簡単な矢印やflexなどの設定はmixinを使用してください。
https://photocreate.qiita.com/shared/items/cc94440a81c93c72714f#n%E8%A1%8C%E7%9B%AE%E4%BB%A5%E9%99%8D%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E7%9C%81%E7%95%A5

タイトルのフォントスタイルは全てmixin化してますので、必ずこちらを使用してください。（style guide参照）

style guide  
https://app.zeplin.io/project/5a0d9d252f1bde4ed240dd58/styleguide

style guideで指定されたフォントスタイルは以下で対応できます。
<table>
<tr>
<td>ガイド名</td>
<td>スタイル記述</td>
</tr>
<tr>
<td>h1.center</td>
<td>@include h1_standard;</td>
</tr>
<tr>
<td>h1.white_center</td>
<td>@include h1_standard($color: #ffffff);</td>
</tr>
<tr>
<td>h1.opne_sans_center</td>
<td>@include h1_open_sans;</td>
</tr>
<tr>
<td>h1.blog</td>
<td>@include h1_blog;</td>
</tr>
<tr>
<td>h2.open_sans</td>
<td>@include h2_open_sans;</td>
</tr>
<tr>
<td>h2.blog</td>
<td>@include h2_blog;</td>
</tr>
<tr>
<td>h2</td>
<td>@include h2_standard;</td>
</tr>
<tr>
<td>h2.center</td>
<td>@include h2_standard(center);</td>
</tr>
<tr>
<td>link.white</td>
<td>@include link_white;</td>
</tr>
<tr>
<td>link.right</td>
<td>@include link_text(right);</td>
</tr>
<tr>
<td>link</td>
<td>@include link_text;</td>
</tr>
<tr>
<td>link.center</td>
<td>@include link_text(center);</td>
</tr>
<tr>
<td>p.blog</td>
<td>@include p_blog;</td>
</tr>
<tr>
<td>h1.sub_white_center</td>
<td>@include h1_sub;</td>
</tr>
<tr>
<td>h1.sub_black_center</td>
<td>@include h1_sub($color: #333333);</td>
</tr>
<tr>
<td>h3</td>
<td>@include h3_standard;</td>
</tr>
<tr>
<td>h3.center</td>
<td>@include h3_standard(center);</td>
</tr>
<tr>
<td>caution</td>
<td>@include caution;</td>
</tr>
<tr>
<td>caution</td>
<td>@include caption;</td>
</tr>
<tr>
<td>caption_center</td>
<td>@include caption(center);</td>
</tr>
<tr>
<td>date</td>
<td>@include date;</td>
</tr>
<tr>
<td>date.white</td>
<td>@include date($color: #ffffff);</td>
</tr>

</table>


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

**コーディングガイドライン**  
https://photocreate.qiita.com/shared/items/be9e9c573d5205679e6b



**方針として**
* 原則idにスタイルを当てるのは禁止です。（idはjavascriptを使用する際につけるぐらい感じ）
* cssのclass名に区切りをつける場合はアンダースコア（ _ ）、javascriptはキャメルケースでお願いします。
* compassを利用しているので「_mixin.scss」に書かれたmixinだけでなく、compassのmixinもできるだけ使ってください。

compassのmixin  
http://www.webdesignleaves.com/wp/htmlcss/675/

※IE9対応などは使用しないで大丈夫ですが、css3アニメーションなどを使用する場合はcompassのmixinで書いて欲しいです。


