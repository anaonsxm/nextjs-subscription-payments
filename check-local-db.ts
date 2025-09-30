import { config } from 'dotenv';
config({ path: '.env.local' });
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function checkProducts() {
  const { data: products, error } = await supabase
    .from('products')
    .select('*, prices(*)');

  if (error) {
    console.error('Error fetching products:', error);
  } else {
    console.log('Products in database:', JSON.stringify(products, null, 2));
  }
}

checkProducts();