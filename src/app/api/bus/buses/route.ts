import { supabase } from "@/lib/database";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Fetch buses from the database
      const { data, error } = await supabase
        .from('Buses')
        .select('*');

      if (error) {
        return res.status(500).json({ error: 'Error fetching buses' });
      }

      return res.status(200).json(data || []);
    } catch (error) {
      console.error('Error fetching buses:', error.message);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
