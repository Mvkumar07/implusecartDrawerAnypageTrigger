
//place the code inside the add to cart success function
document.dispatchEvent(new CustomEvent('ajaxProduct:added', {
                  detail: {
                    product: product,
                    addToCartBtn: ".upsell_text-add"
                  }

 }));
