import { supabase } from "@/lib/database";

export default async function handler(req:any, res:any) {
  const { id } = req.query;

  if (req.method === 'GET') {
    // Fetch driver by ID from the database
    const { data, error } = await supabase
      .from('Buses')
      .select('*')
      .eq('bus_id', id)
      .single();

    if (error) {
      return res.status(500).json({ error: 'Error fetching driver' });
    }

    return res.status(200).json(data || {});
  } else if (req.method === 'PUT') {
    // Update driver by ID in the database
    const { data, error } = await supabase
      .from('drivers')
      .update(req.body)
      .eq('bus_id', id)
      .single();

    if (error) {
      return res.status(500).json({ error: 'Error updating driver' });
    }

    return res.status(200).json(data || {});
  } else if (req.method === 'DELETE') {
    // Delete driver by ID from the database
    const { data, error } = await supabase
      .from('drivers')
      .delete()
      .eq('bus_id', id)
      .single();

    if (error) {
      return res.status(500).json({ error: 'Error deleting driver' });
    }

    return res.status(200).json(data || {});
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
