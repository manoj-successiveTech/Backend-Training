import { Request, Response } from "express";
import os from "os";

class HealthChecker {
  pcHealth = (req: Request, res: Response) => {
    try {
      console.log(`Step-->>>>>> 1`);

      const systemUptime = os.uptime();
      const totalMemory = os.totalmem();
    //   const cpus = os.cpus();
    //   const networkInterface = os.networkInterfaces();
      const hostname = os.hostname();
      const platform = os.platform();
      const memory = os.freemem();

      console.log(`Step-->>>>>> 2`);
      
      return res.status(200).json({
        status: true,
        message: "This is your system health!",
        data: {
          systemUptime,
          hostname,
          platform,
        
          freeMemory: memory,
          totalMemory,
        //   cpus,
        },
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: "Internal server error!",
      });
    }
  };
}

const healthCheck = new HealthChecker();
export default healthCheck;
