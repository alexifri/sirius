'use client';

import { Box, Typography } from '@mui/material';

export default function AboutUsPage() {
    return (
        <Box sx={{ padding: '40px', minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary', fontFamily: 'Roboto' }}>
            <Typography variant="h2" align="center" sx={{ marginBottom: '20px' }}>
                About Sirius Farms
            </Typography>

            {/* Name and Mission */}
            <Typography variant="h4" sx={{ marginBottom: '10px' }}>
                Name and Mission
            </Typography>
            <Typography variant="body1" paragraph>
                Sirius Farms is committed to revolutionizing modern agriculture through cutting-edge satellite data and IoT integration.
                Our mission is rooted in sustainability, education, and collaboration. We empower farmers, governments, and businesses
                with real-time insights that enhance productivity, promote eco-friendly practices, and foster community-based growth.
                By leveraging satellite technology, we aim to create a transparent, efficient, and sustainable agricultural ecosystem,
                ensuring that every decision made on the farm leads to healthier crops and a healthier planet.
            </Typography>

            {/* Market Need */}
            <Typography variant="h4" sx={{ marginTop: '20px', marginBottom: '10px' }}>
                Market Need
            </Typography>
            <Typography variant="body1" paragraph>
                Today, farmers face numerous challenges: unpredictable weather, crop health uncertainty, resource inefficiencies, and
                an urgent need for sustainable practices. Our solutions, based on extensive market research and satellite data, directly
                address these pain points. We provide precise, real-time insights into crop health, soil conditions, and weather patterns,
                allowing farmers to make informed decisions. Satellite monitoring helps track compliance with sustainability regulations,
                making it easier for governments and businesses to ensure eco-friendly operations. Proof of this need can be seen in the
                growing demand for platforms like EOS Data Analytics and Planet Labs.
            </Typography>

            {/* Financials */}
            <Typography variant="h4" sx={{ marginTop: '20px', marginBottom: '10px' }}>
                Financials
            </Typography>
            <Typography variant="body1" paragraph>
                Our service model is cost-efficient and scalable. Initial setup costs focus on satellite integration and IoT sensor installation.
                Ongoing expenses include sensor maintenance (20% of hardware price annually) and software subscriptions. Revenue streams will
                come from subscription-based access to live data, premium crop monitoring services, and government collaboration on compliance
                reporting. With IoT and predictive analytics, we expect substantial growth, driven by data monetization, service subscriptions,
                and partnerships.
            </Typography>

            {/* Coolest Team */}
            <Typography variant="h4" sx={{ marginTop: '20px', marginBottom: '10px' }}>
                Coolest Team
            </Typography>
            <Typography variant="body1" paragraph>
                Our team is deeply motivated by a shared commitment to sustainable farming and tech-driven innovation. We believe in collaboration,
                education, and long-term relationships. Each member brings a unique skill set, from advanced satellite analytics to real-world
                farming expertise. This diversity fuels our drive and ensures that we are well-equipped to tackle any challenge. Our passion for
                environmental impact and agricultural advancement keeps us united and focused on delivering long-term success.
            </Typography>

            {/* Storylike Scenario */}
            <Typography variant="h4" sx={{ marginTop: '20px', marginBottom: '10px' }}>
                Storylike Scenario
            </Typography>
            <Typography variant="body1" paragraph>
                Imagine a farmer in 2026—Gică Bostan, managing his 10-hectares corn farm in Vlădeni. While on vacation, Gică receives a notification
                from the Sirius Farms app, showing a satellite image of his field with color-coded areas indicating fertilizer needs and water stress.
                Within minutes, he remotely instructs his team to apply fertilizer and start irrigation, preventing potential crop loss. By the time
                Gică returns home, his farm’s productivity is secure, and he’s saved both time and resources—all thanks to Sirius Farms’ real-time
                data and analytics.
            </Typography>

            {/* Setting Ourselves Apart */}
            <Typography variant="h4" sx={{ marginTop: '20px', marginBottom: '10px' }}>
                Setting Ourselves Apart
            </Typography>
            <Typography variant="body1" paragraph>
                While others offer agricultural data solutions, Sirius Farms distinguishes itself with unique revenue streams and a deeply moral,
                collaborative approach. We integrate exotic crop classification into our monitoring systems and build farmer databases to promote
                peer-to-peer collaboration. Our government collaborations go beyond reporting; we help improve food traceability and provide direct
                sustainability scores to consumers. By leveraging both satellite and IoT technology, we offer an unmatched combination of precision
                and accessibility.
            </Typography>

            {/* Next Steps */}
            <Typography variant="h4" sx={{ marginTop: '20px', marginBottom: '10px' }}>
                Next Steps
            </Typography>
            <Typography variant="body1" paragraph>
                We are currently seeking investment to scale our IoT integration and expand our team. We also welcome mentorship in both technology
                and business strategy to ensure that Sirius Farms grows sustainably. We invite any questions and discussions on how we can collaborate
                to build a better, more sustainable future for agriculture.
            </Typography>

            {/* Q&A Section */}
            <Typography variant="h4" sx={{ marginTop: '20px', marginBottom: '10px' }}>
                Q&A
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Scalability:</strong> Our IoT implementation will scale through a phased approach, beginning with pilot projects in selected
                farming regions. As the technology proves effective, we plan to deploy it on a larger scale.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Tech Details:</strong> Currently, we are implementing satellite-based crop monitoring using NDVI and other indices, alongside
                IoT sensors for real-time soil and weather data. Before onboarding our first client, we plan to integrate AI models for predictive analysis.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Revenue:</strong> Our revenue model includes selling satellite-derived data, subscription services for real-time monitoring,
                and providing a place in our farmer database for government and corporate stakeholders.
            </Typography>

            <Typography variant="body1" align="center" paragraph>
                Feel free to ask any further questions by contacting us from the "Contact Sales Team" found at the base of the home page.
            </Typography>
        </Box>
    );
}
