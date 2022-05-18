import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { skillsAtom } from '../atoms';

function WordCloud() {
	const [skills, setskills] = useAtom(skillsAtom);
	return (
		<div>
			<div>Click on any of the following skills:</div>
			<div className="flex flex-wrap p-4">
				{skills.map(skill => (
					<Link
						key={skill}
						href={{ pathname: `/skills`, query: { key: skill } }}
					>
						<motion.span className="cursor-pointer mr-1 ml-1 bg-transparent text-lg text-cyan-100 border-transparent hover:text-shadow-blue-light hover:text-cyan-400">
							{skill}
						</motion.span>
					</Link>
				))}
			</div>
		</div>
	);
}

export default WordCloud;
